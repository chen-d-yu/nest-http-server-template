import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { ConfigService } from '../config/config.service';

@Module({
  controllers: [TestController],
  providers: [ConfigService]
})
export class TestModule {}
