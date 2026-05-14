import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './common/constant/app.constant';
import { ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { ResponseInterceptor } from './common/interceptors/response-success.interceptor';
import { PermissionGuard } from './common/guards/roles.guard';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(['http://localhost:3000', 'https://localhost:3001']);

  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new ResponseInterceptor(),
  );
  app.useGlobalGuards(new PermissionGuard(new Reflector()));

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
  });
}
bootstrap();
