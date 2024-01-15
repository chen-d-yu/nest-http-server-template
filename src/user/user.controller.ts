import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { TransformSexPipe } from './pipes/transform-sex.pipe';

@Controller('user')
export class UserController {
  /**
   * 创建用户
   * @param sex
   * @param body
   */
  @Post()
  create(
    @Body('sex', TransformSexPipe) sex: number,
    @Body() body: CreateUserDto,
  ) {
    return `this action will adds a new user what sex is ${sex}, user info is ${JSON.stringify(
      body,
    )}`;
  }
}
