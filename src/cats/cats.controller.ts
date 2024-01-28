import { Body, Controller, Get, Post } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";
import { CreateCatDto } from "./dto/create-cat.dto";
import { AppService } from "../app.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
