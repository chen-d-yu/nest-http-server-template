import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserPipe } from './pipes/user.pipe';
import { ValidationPipe } from '@nestjs/common';
import { Validate } from './pipes/Validate';
import { ParameterException } from './pipes/exception/parameter.exception';
import { ValidateExpceptionFilter } from './pipes/filter/validate-expception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new UserPipe()); // 自定义的管道函数
  // app.useGlobalPipes(new Validate());

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        return new ParameterException(errors);
      },
    }),
  );

  app.useGlobalFilters(new ValidateExpceptionFilter());
  await app.listen(3000);
}

bootstrap();
