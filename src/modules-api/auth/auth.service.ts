import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { LoginDto } from './dto/login.dto.';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}
  // async login(body: LoginDto) {
  //   const { email, password } = body;
  //   const userExist = await this.prismaService.users.findUnique({
  //     where: {
  //       email,
  //     },
  //   });

  //   if (!userExist) {
  //     throw new BadRequestException('Account Invalid');
  //   }
  //   if (!userExist.password) {
  //     throw new BadRequestException('Account Invalid');
  //   }
  //   const isPassword = bcrypt.compareSync(password, userExist.password);
  //   if (!isPassword) {
  //     throw new BadRequestException('Account Invalid');
  //   }

  //   const payload = {
  //     id: userExist.userId,
  //     email: userExist.email,
  //     role: userExist.role,
  //   };

  //   const accessToken = await this.jwtService.signAsync(payload, {
  //     secret: ACCESS_TOKEN_SECRET,
  //     expiresIn: '20m',
  //   });

  //   const refreshToken = await this.jwtService.signAsync(payload, {
  //     secret: REFRESH_TOKEN_SECRET,
  //     expiresIn: '1d',
  //   });
  //   return {
  //     accessToken,
  //     refreshToken,
  //   };
  // }
  // async register(body: RegisterDto) {
  //   const { full_name, email, phone, password } = body;
  //   const userExist = await this.prismaService.users.findUnique({
  //     where: {
  //       email,
  //     },
  //   });
  //   if (userExist) {
  //     throw new BadRequestException('Email already exist');
  //   }

  //   const hashPassword = bcrypt.hashSync(password, 10);
  //   const newUser = await this.prismaService.users.create({
  //     data: {
  //       full_name,
  //       email,
  //       phone,
  //       password: hashPassword,
  //       role: 'USER',
  //     },
  //     select: {
  //       userId: true,
  //       full_name: true,
  //       email: true,
  //       phone: true,
  //       role: true,
  //     },
  //   });

  //   return newUser;
  // }
  // async refreshToken(token: TokenDto) {
  //   const { accessToken, refreshToken } = token;
  //   if (!accessToken || !refreshToken) {
  //     throw new UnauthorizedException('Invalid token');
  //   }
  //   const decodeAccessToken = await this.jwtService.verifyAsync(accessToken, {
  //     secret: ACCESS_TOKEN_SECRET,
  //     ignoreExpiration: true,
  //   });
  //   const decodeRefreshToken = await this.jwtService.verifyAsync(refreshToken, {
  //     secret: REFRESH_TOKEN_SECRET,
  //   });

  //   if (decodeAccessToken.id !== decodeRefreshToken.id) {
  //     throw new UnauthorizedException('Invalid token');
  //   }
  //   const payload = {
  //     id: decodeRefreshToken.id,
  //     email: decodeRefreshToken.email,
  //     role: decodeRefreshToken.role,
  //   };
  //   const [newAccessToken, newRefreshToken] = await Promise.all([
  //     this.jwtService.signAsync(payload, {
  //       secret: ACCESS_TOKEN_SECRET,
  //       expiresIn: '1m',
  //     }),
  //     this.jwtService.signAsync(payload, {
  //       secret: REFRESH_TOKEN_SECRET,
  //       expiresIn: '1d',
  //     }),
  //   ]);

  //   return {
  //     accessToken: newAccessToken,
  //     refreshToken: newRefreshToken,
  //   };
  // }
}
