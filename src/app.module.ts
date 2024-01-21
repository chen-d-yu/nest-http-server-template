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
    // apply class middleware
    // consumer.apply(LoggerMiddleware).forRoutes("");

    // apply functional middleware
    // consumer.apply(functionalLogger).forRoutes(CatsController);

    // apply multi middleware by chain
    // consumer.apply(functionalLogger).forRoutes(CatsController).apply(LoggerMiddleware).forRoutes(CatsController);

    // apply multi middleware by array
    // consumer.apply(functionalLogger, LoggerMiddleware).forRoutes(CatsController);

    // exclude route
    consumer.apply(functionalLogger).exclude("cats").forRoutes("*");
  }
}
