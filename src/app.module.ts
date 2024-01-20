import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { functionalLogger } from "./middlewares/functionalLogger";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes("");
    consumer.apply(functionalLogger).forRoutes("");
  }
}
