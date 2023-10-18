import { Module } from '@nestjs/common';
import { ResultPackagingService } from './result-packaging.service';
import { ResultPackagingController } from './result-packaging.controller';

@Module({
  controllers: [ResultPackagingController],
  providers: [ResultPackagingService],
})
export class ResultPackagingModule {}
