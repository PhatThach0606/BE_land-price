import { Controller, Get } from '@nestjs/common';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Get('ben-thanh')
  async getMap() {
    return this.mapService.findAll();
  }
  @Get('traffic')
  async getTraffic() {
    return this.mapService.findAllTraffic();
  }
  @Get('line-string')
  async getLineString() {
    return this.mapService.findLineString();
  }
}
