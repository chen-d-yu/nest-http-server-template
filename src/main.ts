import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserPipe } from './pipes/user.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new UserPipe()); // 自定义的管道函数
  await app.listen(3000);
}
bootstrap();
