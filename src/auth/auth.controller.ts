import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  UseFilters,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthFilter } from './auth.filter';

@Controller('auth')
@UseFilters(AuthFilter)
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() body: User) {
    console.log(body);
    return this.auth.login(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
