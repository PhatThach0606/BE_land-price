import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { TokenDto } from './dto/token.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/public.decorator';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @Public()
  login(@Body() body: LoginDto) {
    const result = this.authService.login(body);
    return result;
  }
  @Post('register')
  @Public()
  register(@Body() body: RegisterDto) {
    const result = this.authService.register(body);
    return result;
  }
  @Post('refresh-token')
  @Public()
  refreshToken(@Body() token: TokenDto) {
    const result = this.authService.refreshToken(token);
    return result;
  }
}
