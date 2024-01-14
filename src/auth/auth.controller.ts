import {
  BadRequestException,
  Controller,
  Get,
  Headers,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * 查询用户是否携带请求头 - authorization
   * @param authorization
   */
  @Get()
  auth(@Headers('authorization') authorization: string) {
    if (!authorization) {
      throw new BadRequestException();
    }

    return 'login success';
  }

  /**
   * 用户登出，无内容返回
   */
  @Get('loginout')
  @HttpCode(204)
  loginOut() {}
}
