import { Body, Controller, Get, Post } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";
import { CreateCatDto } from "./dto/create-cat.dto";
import { AppService } from "../app.service";
import { createMockService } from "./cats.module";

@Controller("cats")
export class CatsController {
  constructor(private readonly mockService: CatsService) {}

  @Get()
  findAll() {
    return (this.mockService as unknown as ReturnType<typeof createMockService>).mockCreate();
  }
}
