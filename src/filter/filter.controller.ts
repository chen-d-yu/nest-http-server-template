import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ForbiddenException } from './filter/forbidden.exception';

@Controller('filter')
export class FilterController {
  @Get()
  getHello(): void {
    // throw new HttpException(
    //   {
    //     message: '请求错误',
    //     error: true,
    //     statusCode: HttpStatus.BAD_REQUEST,
    //   },
    //   HttpStatus.BAD_REQUEST,
    // );

    // 抛出自定义异常
    throw new ForbiddenException({
      message: '请求错误',
      error: true,
      statusCode: HttpStatus.BAD_REQUEST,
    });
  }
}
