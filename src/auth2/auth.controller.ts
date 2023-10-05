import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() body: User) {
    return this.auth.login(body);
  }
}
