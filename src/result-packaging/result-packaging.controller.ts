import { Controller, Get, HttpCode, UseInterceptors } from '@nestjs/common';
import { ResultPackagingService } from './result-packaging.service';
import { ResultPackagingInterceptor } from './result-packaging.interceptor';

@Controller('result-packaging')
@UseInterceptors(ResultPackagingInterceptor)
export class ResultPackagingController {
  constructor(
    private readonly resultPackagingService: ResultPackagingService,
  ) {}

  @Get()
  findAll() {
    console.log('路由方法');
    return {
      name: '张三',
      age: 18,
    };
  }
}
