import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [TestController],
  providers: [ConfigService]
})
export class TestModule {}
