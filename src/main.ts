import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RoleGuard } from './guard/role/role.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局注册使用守卫
  //  app.useGlobalGuards(new RoleGuard());

  await app.listen(3000);
}
bootstrap();
