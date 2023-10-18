import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { ResultPackagingModule } from './result-packaging/result-packaging.module';
import { TimeoutModule } from './timeout/timeout.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [LoggerModule, ResultPackagingModule, TimeoutModule, CacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
