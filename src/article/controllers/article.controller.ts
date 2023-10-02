import { ArticleService } from "../services/article.service";
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";

@Controller("article")
export class UserController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async findAll() {
    return this.articleService.findAll();
  }

  @Get("/:id")
  async findOne(@Param("id") id: number) {
    return this.articleService.findOne(id);
  }

  @Post()
  async create(@Body() article: any) {
    return this.articleService.create(article);
  }

  @Put("/:id")
  async update(@Param("id") id: number, @Body() article: any) {
    return this.articleService.update(id, article);
  }

  @Delete("/:id")
  async delete(@Param("id") id: number) {
    return this.articleService.remove(id);
  }
}
