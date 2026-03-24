import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from 'src/modules-system/prisma/prisma.service';
import { PointDto } from './dto/spatial.dto.js';
import * as turf from '@turf/turf';
import { FeatureCollectionGeoJson } from 'src/common/constant/responseGeoJson.constant';
@Injectable()
export class SpatialService {
  constructor(private prismaService: PrismaService) {}
  async findPositionLandLot(body: PointDto) {
    const lat = body.lat;
    const lng = body.lng;
    if (lat === undefined || lng === undefined)
      throw new BadRequestException('lat và lng bắt buộc');
    if (lat < -90 || lat > 90 || lng < -180 || lng > 180)
      throw new BadRequestException('lat/lng ngoài giới hạn');
    const pointWKT = `POINT(${lng} ${lat})`;
    const land = await this.prismaService.$queryRaw<
      { gid: number; geom: string }[]
    >`
    SELECT gid,loai_dat, dien_tich, ma_xa, so_to, so_thua, ST_AsGeoJSON(geom) AS geom
    FROM thuadat
    WHERE ST_Contains(geom, ST_GeomFromText(${pointWKT}, 4326))
    LIMIT 1
  `;
    if (!land.length) throw new NotFoundException('Không tìm thấy thửa đất');
    const geojson = JSON.parse(land[0].geom);

    let position: number;

    if (await this.isPosition1(geojson)) position = 1;
    else if (await this.isPosition2(geojson, land)) position = 2;
    else if (await this.isPosition3(geojson, land)) position = 3;
    else position = 4;

    const featureCollection = FeatureCollectionGeoJson([
      { geom: geojson, properties: { ...land, position } },
    ]);

    return featureCollection;
  }

  async isPosition1(geojson: any): Promise<boolean> {
    const geomStr = JSON.stringify(geojson);

    const result = await this.prismaService.$queryRaw<{ gid: number }[]>`
    SELECT gid
    FROM giaothong
    WHERE 
      ST_Touches(
        geom,
        ST_SetSRID(ST_GeomFromGeoJSON(${geomStr}), 4326)
      )
    LIMIT 1
  `;

    return result.length > 0;
  }

  async isPosition2(geojson: any, land: any): Promise<boolean> {
    const area = turf.area(geojson);
    return area >= 300 && area < 500;
  }

  async isPosition3(geojson: any, land: any): Promise<boolean> {
    const area = turf.area(geojson);
    return area >= 100 && area < 300;
  }
}
