import {
  Body,
  Controller,
  Get,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CacheService } from './cache.service';
import { IsCanCache } from './decorators';
import { CacheInterceptor } from './cache.interceptor';

@Controller('cache')
@UseInterceptors(CacheInterceptor)
export class CacheController {
  constructor(private readonly cacheService: CacheService) {}

  @Get()
  @IsCanCache(true)
  cacheData(@Query('id') id: number) {
    return this.cacheService.findOne(+id);
  }
}
