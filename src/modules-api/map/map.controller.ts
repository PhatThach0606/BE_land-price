import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { MapService } from './map.service';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}
  // @Roles('ADMIN')

  @Get('ben-thanh')
  async getMap() {
    return this.mapService.findAll();
  }
  // @Roles('ADMIN')
  @Get('traffic')
  async getTraffic() {
    return this.mapService.findAllTraffic();
  }
  @Get('traffic-logic')
  async getTrafficLogic() {
    return this.mapService.findAllTraffic_Logic();
  }
  // @Roles('ADMIN')
  @Get('line-string')
  async getLineString() {
    return this.mapService.findLineString();
  }
  // Thua dat
  @Get('thua-dat')
  findAllThuaDat(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
    @Query('keyword') keyword?: string,
  ) {
    return this.mapService.findAllThuaDat(
      Number(page),
      Number(pageSize),
      keyword ?? '',
    );
  }

  @Patch('thua-dat/:id')
  updateThuaDat(@Param('id') id: string, @Body() body: any) {
    return this.mapService.updateThuaDat(Number(id), body);
  }

  @Get('giao-thong')
  findAllGiaoThong(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
    @Query('keyword') keyword?: string,
  ) {
    return this.mapService.findAllGiaoThong(
      Number(page),
      Number(pageSize),
      keyword ?? '',
    );
  }

  @Patch('giao-thong/:id')
  updateGiaoThong(@Param('id') id: string, @Body() body: any) {
    return this.mapService.updateGiaoThong(String(id), body);
  }
}
