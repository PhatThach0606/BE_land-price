import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CloudinaryService } from 'src/modules-system/cloudinary/cloudinary.service';
@Module({
  controllers: [UsersController],
  providers: [UsersService, CloudinaryService],
  exports: [CloudinaryService],
})
export class UsersModule {}
