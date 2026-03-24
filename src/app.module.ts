import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules-api/auth/auth.module';
import { MapModule } from './modules-api/map/map.module';
import { PrismaModule } from './modules-system/prisma/prisma.module';
import { SpatialModule } from './modules-api/spatial/spatial.module';
@Module({
  imports: [AuthModule, MapModule, PrismaModule, SpatialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
