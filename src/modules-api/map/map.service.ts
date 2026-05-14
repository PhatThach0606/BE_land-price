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
    SELECT ST_AsGeoJSON(geom) as geom
    FROM benthanh
    `;
    return FeatureCollectionGeoJson(
      result.map((item) => ({ geom: item.geom, properties: { type: 'land' } })),
    );
  }

  async findAllTraffic() {
    const result: any = await this.prismaService.$queryRaw`
    SELECT ST_AsGeoJSON(geom) as geom
    FROM giaothong
    `;
    return FeatureCollectionGeoJson(
      result.map((item) => ({ geom: item.geom, properties: { type: 'road' } })),
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

    let whereCondition: Prisma.benthanhWhereInput = {};

    if (keyword) {
      const parts = keyword.split(/[\s/-]+/);

      // ✅ Case: "12 34" → tờ + thửa
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
      this.prismaService.benthanh.findMany({
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
      this.prismaService.benthanh.count({ where: whereCondition }),
    ]);

    const totalPage = Math.ceil(total / pageSize);

    if (page > totalPage && totalPage !== 0) {
      throw new BadRequestException('Page not found');
    }

    return { page, pageSize, total, totalPage, data };
  }
  async updateThuaDat(id: number, body: any) {
    const existing = await this.prismaService.benthanh.findUnique({
      where: { gid: id },
    });

    if (!existing) {
      throw new NotFoundException('Thửa đất không tồn tại');
    }

    return this.prismaService.benthanh.update({
      where: { gid: id },
      data: {
        so_to: body.so_to,
        so_thua: body.so_thua,
        loai_dat: body.loai_dat,
        dien_tich: body.dien_tich,
      },
    });
  }
  // GiaoThong
  async findAllGiaoThong(page: number, pageSize: number, keyword: string) {
    page = page < 1 ? 1 : page;
    pageSize = pageSize < 1 ? 10 : pageSize;

    const skips = (page - 1) * pageSize;

    let whereCondition: Prisma.giaothong_vitriWhereInput = {};

    if (keyword) {
      whereCondition = {
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
      };
    }

    const [data, total] = await Promise.all([
      this.prismaService.giaothong_vitri.findMany({
        where: {
          AND: [
            whereCondition,
            {
              NOT: {
                ten_duong: {
                  in: ['Hẻm', 'hẻm', 'Hẽm', 'hẽm'],
                },
              },
            },
          ],
        },
        skip: skips,
        take: pageSize,
        select: {
          gid: true,
          ten_duong: true,
          doan_duong: true,
          odt: true,
          tmv: true,
          skc: true,
        },
        orderBy: { gid: 'asc' },
      }),
      this.prismaService.giaothong_vitri.count({
        where: {
          AND: [
            whereCondition,
            {
              NOT: {
                ten_duong: {
                  in: ['Hẻm', 'hẻm', 'Hẽm', 'hẽm'],
                },
              },
            },
          ],
        },
      }),
    ]);

    const totalPage = Math.ceil(total / pageSize);

    if (page > totalPage && totalPage !== 0) {
      throw new BadRequestException('Page not found');
    }

    return { page, pageSize, total, totalPage, data };
  }

  async updateGiaoThong(id: number, body: any) {
    const existing = await this.prismaService.giaothong_vitri.findUnique({
      where: { gid: id },
    });

    if (!existing) {
      throw new NotFoundException('Giao thông không tồn tại');
    }

    return this.prismaService.giaothong_vitri.update({
      where: { gid: id },
      data: {
        ten_duong: body.ten_duong,
        odt: body.odt,
        tmv: body.tmv,
        skc: body.skc,
      },
    });
  }
}
