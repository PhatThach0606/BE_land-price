import { Injectable } from '@nestjs/common';
import { openai } from './openai.provider';
import { createClient } from '@supabase/supabase-js';
import { LAND_TOOLS } from 'src/common/AI/tool/ai.tool.js';
type ChunkType = 'street_price' | 'law' | 'rule' | 'misc';

type Chunk = {
  content: string;
  type: ChunkType;
  metadata: {
    fileName: string;
    street?: string;
    ward?: string; // Thêm dòng này
    context?: string; // Thêm dòng này
    chunkIndex?: number;
  };
};
@Injectable()
export class AiService {
  private supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  // =========================
  // UPLOAD
  // =========================
  async handleUpload(file: Express.Multer.File) {
    const text = await this.extractText(file);
    const cleaned = this.cleanText(text);

    const chunks = this.splitByStructure(cleaned, file.originalname);

    // FIX: Supabase JSON filter
    await this.supabase
      .from('documents')
      .delete()
      .eq('metadata->>fileName', file.originalname);

    // =========================
    // BATCH EMBEDDINGS (FAST)
    // =========================
    const embeddings = await Promise.all(
      chunks.map((c) => this.createEmbedding(c.content)),
    );

    const rows = chunks.map((chunk, i) => ({
      content: chunk.content,
      embedding: embeddings[i],
      metadata: {
        ...chunk.metadata,
        fileName: file.originalname,
        chunkIndex: i,
        type: chunk.type,
      },
    }));

    const { error } = await this.supabase.from('documents').insert(rows);

    if (error) throw new Error(error.message);

    return {
      message: 'Upload success',
      totalChunks: rows.length,
    };
  }

  // =========================
  // TEXT EXTRACTION
  // =========================
  async extractText(file: Express.Multer.File): Promise<string> {
    // PDF
    if (file.mimetype === 'application/pdf') {
      const pdfParse = require('pdf-parse');
      const data = await pdfParse(file.buffer);
      return data.text || '';
    }

    // TXT
    if (file.mimetype === 'text/plain' || file.originalname.endsWith('.txt')) {
      return file.buffer.toString('utf-8');
    }

    throw new Error('Unsupported file type');
  }
  cleanText(text: string): string {
    return text
      .replace(/\r/g, '')
      .replace(/[ \t]+/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  // =========================
  // SPLIT LOGIC
  // =========================
  splitByStructure(text: string, fileName: string): Chunk[] {
    const chunks: Chunk[] = [];

    // 1. Tách theo Phụ lục hoặc Bảng giá lớn
    const sections = text.split(
      /(?=BẢNG GIÁ ĐẤT PHƯỜNG|Phụ lục\s+[IVX]+|Điều\s+\d+\.)/g,
    );

    let currentContext = ''; // Lưu tên Phường hoặc Chương hiện tại

    for (const section of sections) {
      const clean = section.trim();
      if (!clean) continue;

      // Cập nhật ngữ cảnh nếu bắt gặp tên Phường
      const wardMatch = clean.match(/BẢNG GIÁ ĐẤT PHƯỜNG\s+([A-ZÀ-Ỹ\s]+)/i);
      if (wardMatch) currentContext = wardMatch[1].trim();

      if (clean.includes('BẢNG GIÁ')) {
        // Truyền context vào để mỗi con đường đều có tên Phường
        chunks.push(...this.parseTable(clean, fileName, currentContext));
      } else if (clean.includes('Điều')) {
        chunks.push(...this.parseLaw(clean, fileName));
      } else {
        chunks.push({
          content: clean,
          type: 'misc',
          metadata: { fileName, context: currentContext },
        });
      }
    }
    return chunks;
  }

  // =========================
  // TABLE PARSER
  // =========================
  parseTable(text: string, fileName: string, ward: string): Chunk[] {
    const chunks: Chunk[] = [];
    const lines = text.split('\n');
    for (const line of lines) {
      const l = line.trim();
      // Regex này bắt: STT - Tên đường - Giá Đất Ở - Giá TM-DV - Giá SXKD
      // Lưu ý: Nghị quyết 87 dùng đơn vị 1.000đ, nên giá thường là "278.600"
      const match = l.match(
        /^(\d+)\s+(.+?)\s+([\d\.]+)\s+([\d\.]+)\s+([\d\.]+)$/i,
      );

      if (match) {
        const street = match[2].trim();
        const priceO = match[3]; // Giá đất ở
        const priceTMDV = match[4]; // Giá Thương mại
        const priceSXKD = match[5]; // Giá Sản xuất

        // Format lại content theo kiểu key-value để GPT dễ đọc
        const formattedContent = `Đường: ${street} (Phường: ${ward})
- Giá đất ở: ${priceO}
- Giá đất TMV: ${priceTMDV}
- Giá đất SKC: ${priceSXKD}
Đơn vị tính: 1.000.000 đồng/m2.`;

        chunks.push({
          content: formattedContent,
          type: 'street_price',
          metadata: { fileName, street, ward },
        });
      }
    }
    return chunks;
  }

  // =========================
  // LAW PARSER
  // =========================
  parseLaw(text: string, fileName: string): Chunk[] {
    const chunks: Chunk[] = [];

    const parts = text.split(/(?=^\d+\.|^[a-z]\))/gm);

    for (const part of parts) {
      const p = part.trim();
      if (p.length < 50) continue;

      chunks.push({
        content: p,
        type: 'law',
        metadata: { fileName },
      });
    }

    return chunks;
  }

  // =========================
  // EMBEDDING
  // =========================
  async createEmbedding(text: string) {
    const res = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
    });

    return res.data[0].embedding;
  }

  // =========================
  // ASK (RAG)
  // =========================

  async ask(question: string) {
    const embedding = await this.createEmbedding(question);
    const isStreetQuery = /đường|phố|hẻm|giá đất/i.test(question);
    const { data, error } = await this.supabase.rpc('match_documents', {
      query_embedding: embedding,
      match_count: 10,
    });

    if (error) throw new Error(error.message);

    let results = data ?? [];

    // =====================
    // STREET BOOST LOGIC
    // =====================
    if (isStreetQuery) {
      results = results.sort((a: any, b: any) => {
        const aScore =
          a.metadata?.street && question.includes(a.metadata.street) ? 1 : 0;

        const bScore =
          b.metadata?.street && question.includes(b.metadata.street) ? 1 : 0;

        return bScore - aScore;
      });
    }

    const context = results.map((r: any) => r.content).join('\n\n');

    const prompt = `
Bạn là chuyên gia tra cứu giá đất. Dữ liệu dưới đây được trích xuất từ bảng giá đất chính thức.

QUY TRÌNH TRẢ LỜI:
1. Xác định đúng tên đường và phường khách hàng hỏi.
2. Tìm dòng tương ứng trong NGỮ CẢNH.
3. Đối chiếu đúng cột:
   - Cột 1: Giá đất ở
   - Cột 2: Giá đất Thương mại, dịch vụ
   - Cột 3: Giá đất Sản xuất, kinh doanh
4. Trình bày rõ ràng. Nếu giá là "687.200", hãy giải thích đó là 687.200.000 đồng/m2.

NGỮ CẢNH:
${context}

CÂU HỎI:
${question}
`;

    const res = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'Trợ lý pháp lý chính xác về đất đai',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.1,
    });

    return {
      answer: res.choices[0].message.content,
      context,
    };
  }
}
