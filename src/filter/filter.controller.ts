import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { ForbiddenException } from './filter/forbidden.exception';
import { FilterFilter } from './filter/filter.filter';

@Controller('filter')
@UseFilters(FilterFilter)
export class FilterController {
  @Get()
  @UseFilters(FilterFilter)
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
      message: '参数错误',
    });
  }
}
