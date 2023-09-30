import { UserService } from "../services/user.service";
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";

@Controller("tags")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/:id")
  async findOne(@Param("id") id: number) {
    const res = await this.userService.findOne(id);
    return res;
  }

  @Post()
  async create(@Body() user: any) {
    const res = await this.userService.create(user);
    return res;
  }

  @Put("/:id")
  async update(@Param("id") id: number, @Body() user: any) {
    const res = await this.userService.updateById(id, user);
    return res;
  }

  @Delete("/:id")
  async delete(@Param("id") id: number) {
    const res = await this.userService.deleteById(id);
    return res;
  }
}
