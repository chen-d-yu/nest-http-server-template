import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * 创建用户
   * @param createUserDto
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /**
   * 查询所有用户
   */
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  /**
   * 根据id查询用户
   * @param id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  /**
   * 更新用户字段
   * @param id
   * @param updateUserDto
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  /**
   * 删除用户
   * @param id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  /**
   * 重定向跳转文档
   */
  @Get('document')
  @Redirect('https://chen-d-yu.github.io/knowledge-has-no-limit/', 302)
  gotoDocument() {}
}
