import { Controller, Get, Body, Post } from '@nestjs/common';
import { SpatialService } from './spatial.service';
import { PointDto } from './dto/spatial.dto.js';

@Controller('spatial')
export class SpatialController {
  constructor(private readonly spatialService: SpatialService) {}

  @Post('compute-position-by-coord')
  async computeByCoord(@Body() body: PointDto) {
    return this.spatialService.findPositionLandLot(body);
  }
}
