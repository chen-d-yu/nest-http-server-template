import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  ParseArrayPipe,
  ParseEnumPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { Gender, users } from './pipe.contant';
import { UserDto } from './dto/user.dto';

@Controller('pipes')
export class PipesController {
  @Get('int')
  testIntPipe(
    @Query(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.BAD_GATEWAY, // 指定状态码
        exceptionFactory: () =>
          // 指定状态码同时指定错误信息
          new HttpException(
            '自定义返回响应错误信息——用户不存在',
            HttpStatus.BAD_GATEWAY,
          ),
      }),
    )
    id: number,
  ) {
    //    if (!user) {
    //      throw new HttpException('用户不存在', HttpStatus.BAD_REQUEST);
    //    }

    return users.find((item) => item.id === id);
  }

  @Get('arr')
  testArrPipe(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ) {
    return users.filter((item) => ids.includes(item.id));
  }

  @Get('enum')
  testEnumPipe(@Query('gender', new ParseEnumPipe(Gender)) gender: Gender) {
    return users.filter((item) => item.gender === gender);
  }

  @Get('default-val')
  testDefaultValPipe(@Query('id', new DefaultValuePipe(1)) id: number) {
    console.log(id);
    return users.find((item) => item.id === id);
  }

  @Post('custom-pipe')
  testCustomPipe(@Body() body: UserDto) {
    return body;
  }
}
