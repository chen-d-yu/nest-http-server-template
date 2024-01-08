import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Query装饰器，直接解析获取query参数，无需通过req.query去获取
  @Get()
  findAll(@Query('name') query) {
    return {
      code: 200,
      message: query.name,
    };
  }

  @Get('req')
  requestObject(@Req() req: Request, @Res() res: Response) {
    res.send({
      code: 200,
      message: req.query.name,
    });
  }
}
