import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";
import { LoggerInterceptor } from "./interceptors/logger.interceptor";
import { LoggerInterceptor2 } from "./interceptors/logger2.interceptor";

// @UseInterceptors(LoggerInterceptor)
@UseInterceptors(LoggerInterceptor2)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseInterceptors(LoggerInterceptor2)
  @UseInterceptors(LoggerInterceptor)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
