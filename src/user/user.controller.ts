import { Controller, Get, Param, Req, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { users } from "../constants/user.mock";
import { Request } from "express";
import { AuthGuard } from "../guards/auth.guard";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get("self")
  findOne(@Req() req: Request & Record<any, any>) {
    const { user } = req;
    return user;
  }
}
