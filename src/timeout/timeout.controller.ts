import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { TimeoutService } from './timeout.service';
import { TimeoutInterceptor } from './timeout.interceptor';

@Controller('timeout')
@UseInterceptors(TimeoutInterceptor)
export class TimeoutController {
  constructor(private readonly timeoutService: TimeoutService) {}

  @Get()
  async findAll() {
    await new Promise((resolve) => setTimeout(resolve, 4000)); // 6 seconds
    return {
      user: '张三',
      age: 18,
    };
  }
}
