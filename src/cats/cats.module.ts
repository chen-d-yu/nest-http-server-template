import { Module } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CatsController } from "./cats.controller";
import { AppService } from "../app.service";

const createMockService = () => {
  return {
    // ... mock service
  };
};

@Module({
  controllers: [CatsController],
  providers: [
    {
      provide: CatsService,
      useValue: createMockService()
    }
  ]
})
export class CatsModule {}
