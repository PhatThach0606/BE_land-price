import { Injectable } from '@nestjs/common';
import { openai } from './openai.provider';
import { supabase } from './supabase.provider';
type Chunk = {
  content: string;
  type: 'law' | 'land_price' | 'misc';
  metadata: {
    fileName: string;
    article?: string;
    street?: string;
    ward?: string;
    context?: string;
    chunkIndex?: number;
  };
};
type LandPriceRecord = {
  street: string;
  residentialPrice: number;
  commercialPrice: number;
  productionPrice: number;
};

@Injectable()
export class DocumentUploadService {
  private async extractText(file: Express.Multer.File): Promise<string> {
    if (file.mimetype === 'application/pdf') {
      const pdfParse = require('pdf-parse');

      const data = await pdfParse(file.buffer);

      return data.text || '';
    }

    if (file.mimetype === 'text/plain') {
      return file.buffer.toString('utf-8');
    }

    throw new Error('Unsupported file type');
  }
  private cleanText(text: string): string {
    return text
      .replace(/\r/g, '')
      .replace(/[ \t]+/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }
  private detectDocumentType(text: string): 'LAND_PRICE' | 'LEGAL' | 'UNKNOWN' {
    const upper = text.toUpperCase();

    if (upper.includes('BẢNG GIÁ ĐẤT') || upper.includes('GIÁ ĐẤT Ở')) {
      return 'LAND_PRICE';
    }

    if (
      upper.includes('LUẬT') ||
      upper.includes('NGHỊ ĐỊNH') ||
      upper.includes('THÔNG TƯ') ||
      upper.includes('ĐIỀU')
    ) {
      return 'LEGAL';
    }

    return 'UNKNOWN';
  }
  private chunkLegalDocument(text: string, fileName: string): Chunk[] {
    const articles = text.split(/(?=Điều\s+\d+)/gi);

    return articles
      .filter((a) => a.trim().length > 100)
      .map((article, index) => {
        const articleMatch = article.match(/Điều\s+(\d+)/i);

        return {
          content: article.trim(),
          type: 'law',

          metadata: {
            fileName,
            article: articleMatch?.[1],
            chunkIndex: index,
          },
        };
      });
  }
  private parseLandPrice(text: string) {
    const results: LandPriceRecord[] = [];

    const lines = text.split('\n');

    for (const line of lines) {
      const match = line.match(
        /^(\d+)\s+(.+?)\s+([\d\.]+)\s+([\d\.]+)\s+([\d\.]+)$/i,
      );

      if (!match) continue;

      results.push({
        street: match[2].trim(),

        residentialPrice: Number(match[3].replace(/\./g, '')) * 1000,

        commercialPrice: Number(match[4].replace(/\./g, '')) * 1000,

        productionPrice: Number(match[5].replace(/\./g, '')) * 1000,
      });
    }
    return results;
  }
  private async createEmbeddingBatch(chunks: Chunk[]) {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: chunks.map((c) => c.content),
    });
    return response.data.map((e) => e.embedding);
  }
  private async saveChunksToSupabase(chunks: Chunk[]) {
    const embeddings = await this.createEmbeddingBatch(chunks);

    const rows = chunks.map((chunk, index) => ({
      content: chunk.content,

      embedding: embeddings[index],

      metadata: chunk.metadata,
    }));

    const { error } = await supabase.from('documents').insert(rows);

    if (error) throw new Error(error.message);
  }
  //   MAIN FUNCTION
  async uploadFile(file: Express.Multer.File) {
    const rawText = await this.extractText(file);
    const text = this.cleanText(rawText);
    const type = this.detectDocumentType(text);
    if (type === 'LAND_PRICE') {
      const prices = this.parseLandPrice(text);
      return {
        type,
        totalRecords: prices.length,
        data: prices,
      };
    }
    if (type === 'LEGAL') {
      const chunks = this.chunkLegalDocument(text, file.originalname);
      await this.saveChunksToSupabase(chunks);
      return {
        type,
        totalChunks: chunks.length,
      };
    }
    throw new Error('Không nhận diện được loại tài liệu');
  }
}
