import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';
import { PointDto } from './dto/spatial.dto.js';
import { FeatureCollectionGeoJson } from 'src/common/constant/responseGeoJson.constant';

@Injectable()
export class SpatialService {
  constructor(private prismaService: PrismaService) {}

  async findPositionLandLot(body: PointDto) {
    const { lat, lng } = body;

    if (lat === undefined || lng === undefined)
      throw new BadRequestException('lat và lng bắt buộc');

    if (lat < -90 || lat > 90 || lng < -180 || lng > 180)
      throw new BadRequestException('lat/lng ngoài giới hạn');

    const pointWKT = `POINT(${lng} ${lat})`;

    // 1. Tìm thửa đất tại vị trí click
    const land = await this.prismaService.$queryRaw<any[]>`
    SELECT gid, loai_dat, dien_tich, ma_xa, so_to, so_thua, ST_AsGeoJSON(geom) AS geom
    FROM benthanh
    WHERE ST_Contains(geom, ST_SetSRID(ST_GeomFromText(${pointWKT}), 4326))
    LIMIT 1
  `;

    if (!land.length) throw new NotFoundException('Không tìm thấy thửa đất');

    const landGeom = land[0].geom;
    const loaiDat = land[0].loai_dat;

    // 2. Tìm thông tin đường tiếp giáp - Ưu tiên đường có GIÁ CAO NHẤT
    // Chúng ta sử dụng GREATEST để lấy giá cao nhất tùy theo loại đất hiện tại của thửa đất
    const road = await this.prismaService.$queryRaw<any[]>`
    SELECT vi_tri, odt, tmv, skc, gid
    FROM giaothong_vitri
    WHERE ST_DWithin(
      ST_Transform(geom, 3857),
      ST_Transform(ST_SetSRID(ST_GeomFromGeoJSON(${landGeom}), 4326), 3857),
      5
    )
    ORDER BY 
      -- Ưu tiên 1: Giá trị tiền cao nhất dựa trên loại đất của thửa đất
      (CASE 
        WHEN ${loaiDat} = 'ODT' THEN odt 
        WHEN ${loaiDat} = 'TMV' THEN tmv 
        WHEN ${loaiDat} = 'SKC' THEN skc 
        ELSE 0 
      END) DESC,
      -- Ưu tiên 2: Vị trí nhỏ nhất (nếu trùng giá thì lấy vị trí ưu tiên hơn)
      vi_tri ASC,
      -- Ưu tiên 3: Khoảng cách gần nhất
      ST_Distance(
        ST_Transform(geom, 3857),
        ST_Transform(ST_SetSRID(ST_GeomFromGeoJSON(${landGeom}), 4326), 3857)
      ) ASC
    LIMIT 1
  `;

    let multiplier = 1;
    let unitPrice = 0;
    const roadInfo = road[0] ?? null;

    const position = roadInfo?.vi_tri ?? 4;
    const SCALE = 1000000;

    // Hệ số nhân theo vị trí (Giữ nguyên logic của bạn)
    switch (position) {
      case 1:
        multiplier = 1;
        break;
      case 2:
        multiplier = 0.5;
        break;
      case 3:
        multiplier = 0.25;
        break;
      case 4:
        multiplier = 0.125;
        break;
      default:
        multiplier = 0.125;
    }

    if (roadInfo) {
      if (loaiDat === 'ODT') unitPrice = roadInfo.odt * SCALE;
      else if (loaiDat === 'TMV') unitPrice = roadInfo.tmv * SCALE;
      else if (loaiDat === 'SKC') unitPrice = roadInfo.skc * SCALE;
    }

    unitPrice = unitPrice * multiplier;
    const totalPrice = unitPrice * (land[0].dien_tich ?? 0);

    return FeatureCollectionGeoJson([
      {
        geom: JSON.parse(landGeom),
        properties: {
          ...land[0],
          position,
          unitPrice,
          totalPrice,
          road: roadInfo,
        },
      },
    ]);
  }
  async updateLand(id: number, body: any) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid land id');
    }

    const { loai_dat, dien_tich, geom } = body;

    const landExist = await this.prismaService.$queryRaw<any[]>`
    SELECT gid FROM benthanh WHERE gid = ${id}
  `;

    if (!landExist.length) {
      throw new NotFoundException('Land not found');
    }

    // Nếu có geometry → convert sang PostGIS
    let geomSQL = '';

    if (geom) {
      try {
        JSON.stringify(geom); // check valid JSON
        geomSQL = `ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(geom)}'), 4326)`;
      } catch (err) {
        throw new BadRequestException('Invalid GeoJSON');
      }
    }

    await this.prismaService.$executeRawUnsafe(
      `
    UPDATE benthanh
    SET 
      loai_dat = COALESCE($1, loai_dat),
      dien_tich = COALESCE($2, dien_tich),
      geom = COALESCE(${geomSQL ?? 'geom'}, geom)
    WHERE gid = $3
  `,
      loai_dat,
      dien_tich,
      id,
    );

    return {
      message: 'Update land success',
    };
  }

  async updateRoad(id: number, body: any) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid road id');
    }

    const { ten_duong, vi_tri, odt, tmv, skc, geom } = body;

    const roadExist = await this.prismaService.$queryRaw<any[]>`
    SELECT gid FROM giaothong_vitri WHERE gid = ${id}
  `;

    if (!roadExist.length) {
      throw new NotFoundException('Road not found');
    }

    let geomSQL = '';

    if (geom) {
      try {
        JSON.stringify(geom);
        geomSQL = `ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(geom)}'), 4326)`;
      } catch (err) {
        throw new BadRequestException('Invalid GeoJSON');
      }
    }

    await this.prismaService.$executeRawUnsafe(
      `
    UPDATE giaothong_vitri
    SET 
      ten_duong = COALESCE($1, ten_duong),
      vi_tri = COALESCE($2, vi_tri),
      odt = COALESCE($3, odt),
      tmv = COALESCE($4, tmv),
      skc = COALESCE($5, skc),
      geom = COALESCE(${geomSQL ?? 'geom'}, geom)
    WHERE gid = $6
  `,
      ten_duong,
      vi_tri,
      odt,
      tmv,
      skc,
      id,
    );

    return {
      message: 'Update road success',
    };
  }
  async getRoadByCoord(body: PointDto) {
    const { lat, lng } = body;

    // ✅ Validate
    if (lat === undefined || lng === undefined) {
      throw new BadRequestException('lat và lng bắt buộc');
    }

    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      throw new BadRequestException('lat/lng ngoài giới hạn');
    }

    const pointWKT = `POINT(${lng} ${lat})`;

    // ✅ Query road gần nhất
    const roads = await this.prismaService.$queryRaw<any[]>`
    SELECT 
      gid,
      ten_duong,
      odt,
      tmv,
      skc,
      ST_AsGeoJSON(geom) AS geom,
      ST_Distance(
        ST_Transform(geom, 3857),
        ST_Transform(ST_GeomFromText(${pointWKT}, 4326), 3857)
      ) AS distance
    FROM giaothong_vitri
    ORDER BY ST_Distance(
      ST_Transform(geom, 3857),
      ST_Transform(ST_GeomFromText(${pointWKT}, 4326), 3857)
    )
    LIMIT 1
  `;

    if (!roads.length) {
      throw new NotFoundException('Không tìm thấy đường');
    }

    const road = roads[0];

    const geom = JSON.parse(road.geom);

    const SCALE = 1000000;

    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: geom,
          properties: {
            gid: road.gid,
            ten_duong: road.ten_duong,
            distance: Number(road.distance.toFixed(2)), // mét
            price: {
              odt: road.odt ? road.odt * SCALE : null,
              tmv: road.tmv ? road.tmv * SCALE : null,
              skc: road.skc ? road.skc * SCALE : null,
            },
          },
        },
      ],
    };
  }
  async getHeatmap(body: any) {
    const { polygon } = body; // optional (lọc theo vùng)

    let wherePolygon = '';

    if (polygon) {
      wherePolygon = `
      WHERE ST_Intersects(
        geom,
        ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(polygon)}'), 4326)
      )
    `;
    }

    const lands: any = await this.prismaService.$queryRawUnsafe(`
    SELECT 
      gid,
      loai_dat,
      dien_tich,
      ST_AsGeoJSON(ST_Centroid(geom)) AS centroid
    FROM benthanh
    ${wherePolygon}
    LIMIT 2000
  `);

    const SCALE = 1_000_000;

    const result = lands.map((item) => {
      const point = JSON.parse(item.centroid);

      // ⚡ giả lập giá (bạn có thể gọi lại logic compute)
      let basePrice = 0;

      switch (item.loai_dat) {
        case 'ODT':
          basePrice = 15 * SCALE;
          break;
        case 'TMV':
          basePrice = 20 * SCALE;
          break;
        case 'SKC':
          basePrice = 10 * SCALE;
          break;
        default:
          basePrice = 5 * SCALE;
      }

      return {
        lat: point.coordinates[1],
        lng: point.coordinates[0],
        price: basePrice,
      };
    });

    return result;
  }
  async compareArea(body: any) {
    const { polygonA, polygonB } = body;

    if (!polygonA || !polygonB) {
      throw new BadRequestException('Cần polygonA và polygonB');
    }

    const SCALE = 1_000_000;

    const queryArea = async (polygon: any) => {
      const res: any = await this.prismaService.$queryRawUnsafe(`
      SELECT 
        loai_dat,
        dien_tich
      FROM benthanh
      WHERE ST_Intersects(
        geom,
        ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(polygon)}'), 4326)
      )
    `);

      if (!res.length) {
        return {
          avg: 0,
          min: 0,
          max: 0,
          count: 0,
        };
      }

      // ⚡ tính giá giả lập (có thể replace bằng logic thật)
      const prices = res.map((item: any) => {
        let base = 0;

        switch (item.loai_dat) {
          case 'ODT':
            base = 15 * SCALE;
            break;
          case 'TMV':
            base = 20 * SCALE;
            break;
          case 'SKC':
            base = 10 * SCALE;
            break;
          default:
            base = 5 * SCALE;
        }

        return base;
      });

      const sum = prices.reduce((a, b) => a + b, 0);

      return {
        avg: Math.round(sum / prices.length),
        min: Math.min(...prices),
        max: Math.max(...prices),
        count: prices.length,
      };
    };

    const [A, B] = await Promise.all([
      queryArea(polygonA),
      queryArea(polygonB),
    ]);

    return {
      areaA: A,
      areaB: B,
    };
  }
}
