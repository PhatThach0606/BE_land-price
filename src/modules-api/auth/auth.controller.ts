import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    //      @Post('login')
    //   @Public()
    //   login(@Body() body: LoginDto) {
    //     const result = this.authService.login(body);
    //     return result;
    //   }
    //   @Post('register')
    //   @Public()
    //   register(@Body() body: RegisterDto) {
    //     const result = this.authService.register(body);
    //     return result;
    //   }
    //   @Post('refresh-token')
    //   @Public()
    //   refreshToken(@Body() token: TokenDto) {
    //     const result = this.authService.refreshToken(token);
    //     return result;
    //   }
    //   }
    // }
    // function login(arg0: any, body: any, LoginDto: any) {
    //   throw new Error('Function not implemented.');
  }
}
