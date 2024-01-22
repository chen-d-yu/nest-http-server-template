import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { LoggerInterceptor } from "./interceptors/logger.interceptor";
import { LoggerInterceptor3 } from "./interceptors/logger3.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggerInterceptor3());
  await app.listen(3000);
}
bootstrap();
