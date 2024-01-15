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

@Controller('user')
export class UserController {
  /**
   * 创建用户
   * @param body
   */
  @Post()
  create(@Body() body) {
    return 'This action adds a new user';
  }

  /**
   * 查询所有用户
   */
  @Get()
  findAll() {
    return `This action returns all user`;
  }

  /**
   * 根据id查询用户
   * @param id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} user`;
  }

  /**
   * 更新用户字段
   * @param id
   * @param body
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates a #${id} user`;
  }

  /**
   * 删除用户
   * @param id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} user`;
  }

  /**
   * 重定向跳转文档
   */
  @Get('document')
  @Redirect('https://chen-d-yu.github.io/knowledge-has-no-limit/', 302)
  gotoDocument() {}
}
