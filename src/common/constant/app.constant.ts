export const DATABASE_URL = process.env.DATABASE_URL as string;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
export const GOOGLE_CLIENT_SECRET: string = process.env
  .GOOGLE_CLIENT_SECRET as string;

export const PORT = process.env.PORT as string;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET! as string;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET! as string;

export const DATABASE_REDIS = process.env.DATABASE_REDIS as string;
export const FOLDER_IMAGES = 'public/images';
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME as string;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY as string;
export const CLOUDINARY_API_SECRET = process.env
  .CLOUDINARY_API_SECRET as string;

// if (!ACCESS_TOKEN_SECRET || !REFRESH_TOKEN_SECRET) {
//   throw new Error('JWT secrets are not defined');
// }

console.log(
  '\n',
  {
    DATABASE_URL: DATABASE_URL,

    ACCESS_TOKEN_SECRET: ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: REFRESH_TOKEN_SECRET,

    GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: GOOGLE_CLIENT_SECRET,

    CLOUDINARY_NAME: CLOUDINARY_NAME,
    CLOUDINARY_API_KEY: CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: CLOUDINARY_API_SECRET,
  },
  '\n',
);
