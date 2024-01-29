import { Module } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CatsController } from "./cats.controller";

export  const createMockService = () => {
  return {
    // ... mock service
    mockCreate: () => {
      return "mock service return a function to create a function";
    }
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
