import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Pipe } from './common/pipe';
import { Filter } from './common/filter';
import { Interceptor } from './common/interceptor';
import { Guard } from './common/guard';
import { Middleware } from './common/middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new Pipe());
  app.useGlobalInterceptors(new Interceptor());
  app.useGlobalGuards(new Guard());
  // app.useGlobalFilters(new Filter());

  await app.listen(3000);
}

bootstrap();
