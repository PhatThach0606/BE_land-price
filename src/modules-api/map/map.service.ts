import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';
import { FeatureCollectionGeoJson } from 'src/common/constant/responseGeoJson.constant';
import { Prisma } from './../../modules-system/prisma/generated/prisma/client';
@Injectable()
export class MapService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    const result: any = await this.prismaService.$queryRaw`
    SELECT loai_dat,ST_AsGeoJSON(geom) as geom
    FROM thuadat
    `;
    return FeatureCollectionGeoJson(
      result.map((item) => ({
        geom: item.geom,
        properties: { type: 'land', loai_dat: item.loai_dat },
      })),
    );
  }

  async findAllTraffic() {
    const result: any = await this.prismaService.$queryRaw`
    SELECT loai_dat,ST_AsGeoJSON(geom) as geom
    FROM giaothong_render
    `;
    return FeatureCollectionGeoJson(
      result.map((item) => ({
        geom: item.geom,
        properties: { type: 'road', loai_dat: item.loai_dat },
      })),
    );
  }
  async findAllTraffic_Logic() {
    const result: any = await this.prismaService.$queryRaw`
    SELECT loai_dat,ST_AsGeoJSON(geom) as geom
    FROM giaothong_logic
    `;
    return FeatureCollectionGeoJson(
      result.map((item) => ({
        geom: item.geom,
        properties: { type: 'road', loai_dat: item.loai_dat },
      })),
    );
  }
  async findLineString() {
    const result: any = await this.prismaService.$queryRaw`
    SELECT ST_AsGeoJSON(geom) as geom
    FROM timduong
    `;
    return FeatureCollectionGeoJson(
      result.map((item) => ({ geom: item.geom })),
    );
  }

  async findAllThuaDat(page: number, pageSize: number, keyword: string) {
    page = page < 1 ? 1 : page;
    pageSize = pageSize < 1 ? 100 : pageSize;

    const skips = (page - 1) * pageSize;

    let whereCondition: Prisma.thuadatWhereInput = {};

    if (keyword) {
      const parts = keyword.split(/[\s/-]+/);

      if (parts.length === 2) {
        const soTo = Number(parts[0]);
        const soThua = Number(parts[1]);

        if (!isNaN(soTo) && !isNaN(soThua)) {
          whereCondition = {
            AND: [{ so_to: soTo }, { so_thua: soThua }],
          };
        }
      } else {
        const keywordNumber = Number(keyword);

        // ✅ Case: số → tờ hoặc thửa
        if (!isNaN(keywordNumber)) {
          whereCondition = {
            OR: [{ so_to: keywordNumber }, { so_thua: keywordNumber }],
          };
        } else {
          // ✅ Case: text → loại đất
          whereCondition = {
            loai_dat: {
              contains: keyword,
              mode: Prisma.QueryMode.insensitive,
            },
          };
        }
      }
    }

    const [data, total] = await Promise.all([
      this.prismaService.thuadat.findMany({
        where: whereCondition,
        skip: skips,
        take: pageSize,
        select: {
          gid: true,
          so_to: true,
          so_thua: true,
          loai_dat: true,
          dien_tich: true,
          mathuadat: true,
        },
        orderBy: { gid: 'asc' },
      }),
      this.prismaService.thuadat.count({ where: whereCondition }),
    ]);

    const totalPage = Math.ceil(total / pageSize);

    if (page > totalPage && totalPage !== 0) {
      throw new BadRequestException('Page not found');
    }

    return { page, pageSize, total, totalPage, data };
  }
  async updateThuaDat(id: number, body: any) {
    // validate id
    if (!id || isNaN(Number(id)) || Number(id) <= 0) {
      throw new BadRequestException('ID không hợp lệ');
    }

    const existing = await this.prismaService.thuadat.findUnique({
      where: { gid: id },
    });

    if (!existing) {
      throw new NotFoundException('Thửa đất không tồn tại');
    }

    // validate số tờ
    if (
      body.so_to === undefined ||
      body.so_to === null ||
      isNaN(Number(body.so_to)) ||
      Number(body.so_to) <= 0 ||
      Number(body.so_to) > 2000
    ) {
      throw new BadRequestException('Số tờ không hợp lệ');
    }

    // validate số thửa
    if (
      body.so_thua === undefined ||
      body.so_thua === null ||
      isNaN(Number(body.so_thua)) ||
      Number(body.so_thua) <= 0 ||
      Number(body.so_thua) > 20000
    ) {
      throw new BadRequestException('Số thửa không hợp lệ');
    }

    // validate loại đất
    if (
      !body.loai_dat ||
      typeof body.loai_dat !== 'string' ||
      body.loai_dat.trim().length < 2 ||
      body.loai_dat.trim().length > 50
    ) {
      throw new BadRequestException('Loại đất không hợp lệ');
    }

    // validate diện tích
    if (
      body.dien_tich === undefined ||
      body.dien_tich === null ||
      isNaN(Number(body.dien_tich)) ||
      Number(body.dien_tich) <= 0 ||
      Number(body.dien_tich) > 1000000
    ) {
      throw new BadRequestException('Diện tích không hợp lệ');
    }

    return this.prismaService.thuadat.update({
      where: { gid: id },

      data: {
        so_to: Number(body.so_to),
        so_thua: Number(body.so_thua),
        loai_dat: body.loai_dat.trim().toUpperCase(),
        dien_tich: Number(body.dien_tich),
      },
    });
  }
  // GiaoThong
  async findAllGiaoThong(page: number, pageSize: number, keyword: string) {
    page = page < 1 ? 1 : page;
    pageSize = pageSize < 1 ? 10 : pageSize;

    const skips = (page - 1) * pageSize;

    const whereCondition: Prisma.banggiadatWhereInput = {
      AND: [
        {
          NOT: [
            {
              ten_duong: {
                startsWith: 'HẺM',
                mode: Prisma.QueryMode.insensitive,
              },
            },
            {
              ten_duong: {
                startsWith: 'Bùng Binh',
                mode: Prisma.QueryMode.insensitive,
              },
            },
          ],
        },

        keyword
          ? {
              OR: [
                {
                  ten_duong: {
                    contains: keyword,
                    mode: Prisma.QueryMode.insensitive,
                  },
                },
                {
                  doan_duong: {
                    contains: keyword,
                    mode: Prisma.QueryMode.insensitive,
                  },
                },
              ],
            }
          : {},
      ],
    };

    const [data, total] = await Promise.all([
      this.prismaService.banggiadat.findMany({
        where: whereCondition,

        skip: skips,
        take: pageSize,

        select: {
          id: true,
          ten_duong: true,
          doan_duong: true,
          odt: true,
          tmd: true,
          skc: true,
        },
      }),

      this.prismaService.banggiadat.count({
        where: whereCondition,
      }),
    ]);

    const totalPage = Math.ceil(total / pageSize);

    if (page > totalPage && totalPage !== 0) {
      throw new BadRequestException('Page not found');
    }

    return {
      page,
      pageSize,
      total,
      totalPage,
      data,
    };
  }
  async updateGiaoThong(id: string, body: any) {
    const existing = await this.prismaService.banggiadat.findUnique({
      where: {
        id: id,
      },
    });

    if (!existing) {
      throw new NotFoundException('Không tìm thấy dữ liệu bảng giá đất');
    }

    return this.prismaService.banggiadat.update({
      where: {
        id: id,
      },

      data: {
        id: body.id,
        odt: body.odt,
        tmd: body.tmd,
        skc: body.skc,
        doan_duong: body.doan_duong,
        ten_duong: body.ten_duong,
      },

      select: {
        id: true,
        ten_duong: true,
        doan_duong: true,
        odt: true,
        tmd: true,
        skc: true,
      },
    });
  }
}
