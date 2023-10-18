import { Logger, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerController } from './logger.controller';
import { LoggerInterceptor } from './logger.interceptor';

@Module({
  controllers: [LoggerController],
  providers: [LoggerService, Logger],
})
export class LoggerModule {}
