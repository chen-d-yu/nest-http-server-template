import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import * as path from 'path';
import * as process from 'process';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      folder: path.resolve(process.cwd(), 'src/config')
    }),
    TestModule
  ]
})
export class AppModule {}
