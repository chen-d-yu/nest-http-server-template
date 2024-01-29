import { Module } from "@nestjs/common";
import { BirdService } from "./bird.service";
import { BirdController } from "./bird.controller";

@Module({
  controllers: [BirdController],
  providers: [
    BirdService,
    {
      provide: "MOCK_TOKEN",
      useValue: "mock token value"
    }
  ],
  exports: ["MOCK_TOKEN"]
})
export class BirdModule {}
