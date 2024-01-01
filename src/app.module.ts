import { Module } from '@nestjs/common';
import * as path from 'path';
import * as process from 'process';
import { TestModule } from './test/test.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(process.cwd(), 'src/config/.env')
    }),
    TestModule
  ]
})
export class AppModule {}
