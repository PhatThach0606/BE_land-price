import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_NAME,
} from 'src/common/constant/app.constant';
@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: CLOUDINARY_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });
  }
  async uploadAvatar(
    file: Express.Multer.File,
  ): Promise<{ url: string; secure_url: string }> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: 'users' }, (error, result: any) => {
          if (error) return reject(error);
          resolve({
            url: result.url,
            secure_url: result.secure_url,
          });
        })
        .end(file.buffer);
    });
  }
  async uploadImageMovie(
    file: Express.Multer.File,
  ): Promise<{ url: string; secure_url: string }> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: 'movie' }, (error, result: any) => {
          if (error) return reject(error);
          resolve({
            url: result.url,
            secure_url: result.secure_url,
          });
        })
        .end(file.buffer);
    });
  }
}
