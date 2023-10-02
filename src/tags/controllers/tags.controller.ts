import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { TagsService } from "../services/tags.service";
import { Tags } from "../entities/tags.entity";
import { CommonParams } from "src/typings/controllers";

@Controller("tags")
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async getTags() {
    const res = await this.tagsService.getAll();
    return res;
  }

  @Post()
  async createTag(@Body() tagInfo: Tags) {
    const res = await this.tagsService.create(tagInfo);
    return res;
  }

  @Put("/:id")
  async updateTag(@Param() params: CommonParams, @Body() tagInfo: Tags) {
    const res = await this.tagsService.updateById(params?.id, tagInfo);
    return res;
  }

  @Delete("/:id")
  async deleteTag(@Param() params: CommonParams) {
    const res = await this.tagsService.deleteById(params?.id);
    return res;
  }
}
