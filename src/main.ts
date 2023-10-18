import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from './logger/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局拦截器注册，如果拦截器中需要用到依赖注入，只能手动 new 注入
  //  app.useGlobalInterceptors(new LoggerInterceptor(new Logger()));

  await app.listen(3000);
}

bootstrap();
