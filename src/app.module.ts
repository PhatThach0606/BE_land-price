import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules-api/auth/auth.module';
import { MapModule } from './modules-api/map/map.module';
import { PrismaModule } from './modules-system/prisma/prisma.module';
import { SpatialModule } from './modules-api/spatial/spatial.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './modules-api/users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { ProtectGuard } from './common/guards/protect.guard';
import { AiModule } from './modules-api/ai/ai.module';
@Module({
  imports: [
    AuthModule,
    MapModule,
    PrismaModule,
    SpatialModule,
    JwtModule.register({
      global: true,
    }),
    UsersModule,
    AiModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AppService,
    {
      provide: APP_GUARD,
      useClass: ProtectGuard,
    },
  ],
})
export class AppModule {}
