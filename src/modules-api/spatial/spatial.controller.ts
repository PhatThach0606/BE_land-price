import { Controller, Get, Body, Post, Patch, Param } from '@nestjs/common';
import { SpatialService } from './spatial.service';
import { PointDto } from './dto/spatial.dto.js';
@Controller('spatial')
export class SpatialController {
  constructor(private readonly spatialService: SpatialService) {}

  @Post('compute-position-by-coord')
  async computeByCoord(@Body() body: PointDto) {
    return this.spatialService.findPositionLandLot(body);
  }

  // Update ThuaDat
  @Patch('land/:id')
  async updateLand(@Param('id') id: string, @Body() body: any) {
    return this.spatialService.updateLand(Number(id), body);
  }
  // Update GiaoThong
  @Patch('road/:id')
  async updateRoad(@Param('id') id: string, @Body() body: any) {
    return this.spatialService.updateRoad(Number(id), body);
  }
  // Get Infor road
  @Post('road-by-coord')
  async getRoadByCoord(@Body() body: PointDto) {
    return this.spatialService.getRoadByCoord(body);
  }
}
