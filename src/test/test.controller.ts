import { Controller, Get, Param, Query } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Controller('test')
export class TestController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(@Query('key') key: string): string {
    return this.configService.get(key);
  }
}
