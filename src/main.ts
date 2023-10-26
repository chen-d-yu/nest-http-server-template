import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserPipe } from './pipes/user.pipe';
import { ValidationPipe } from '@nestjs/common';
import { Validate } from './pipes/Validate';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new UserPipe()); // 自定义的管道函数
  app.useGlobalPipes(new Validate()); // 使用系统管道函数验证
  await app.listen(3000);
}

bootstrap();
