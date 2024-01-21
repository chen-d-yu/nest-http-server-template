import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsModule } from "./cats/cats.module";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "./filters/http-exception.filter";

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService
    // 依赖注入全局异常过滤器
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter
    // }
  ]
})
export class AppModule {}
