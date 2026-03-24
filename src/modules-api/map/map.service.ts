import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';
import { FeatureCollectionGeoJson } from 'src/common/constant/responseGeoJson.constant';
@Injectable()
export class MapService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    const result: any = await this.prismaService.$queryRaw`
    SELECT ST_AsGeoJSON(geom) as geom
    FROM thuadat
    `;
    return FeatureCollectionGeoJson(
      result.map((item) => ({ geom: item.geom })),
    );
  }

  async findAllTraffic() {
    const result: any = await this.prismaService.$queryRaw`
    SELECT ST_AsGeoJSON(geom) as geom
    FROM giaothong
    `;
    return FeatureCollectionGeoJson(
      result.map((item) => ({ geom: item.geom })),
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
}
