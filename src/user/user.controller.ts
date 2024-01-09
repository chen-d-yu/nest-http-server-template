import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
  Headers,
  UploadedFiles,
  UseInterceptors,
  HttpCode,
  Redirect,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Query装饰器，直接解析获取query参数，无需通过req.query去获取
  @Get()
  findAll(@Query('name') query) {
    return {
      code: 200,
      message: query.name,
    };
  }

  @Get('req')
  requestObject(@Req() req: Request, @Res() res: Response) {
    res.send({
      code: 200,
      message: req.query.name,
    });
  }

  @Get(':id')
  findOne(@Param('id') id) {
    const mockUsers = [
      {
        id: 1,
        name: '张三',
      },
      {
        id: 2,
        name: '李四',
      },
    ];

    return {
      code: 200,
      data: mockUsers.find((user) => user.id === +id),
    };
  }

  @Post('urlencoded')
  urlencodedCreate(@Body() body) {
    return {
      code: 200,
      data: body,
    };
  }

  @Post('json')
  jsonCreate(@Body() body) {
    return {
      code: 200,
      data: body,
    };
  }

  @Post('form-data')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uplodas/',
    }),
  )
  formDataCreate(
    @Body() body,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return {
      code: 200,
      data: {
        filename: files[0].filename,
        name: body.name,
      },
    };
  }

  @Get('/get/headers')
  getHeaders(@Headers() headers) {
    return {
      contentType: headers['content-type'],
    };
  }

  @Get('/get/status-code')
  @HttpCode(204)
  getStatusCode() {}

  @Get('/get/redirect')
  @Redirect('https://nestjs.com', 301)
  redirect() {}
}

@Controller('user/info')
export class InfoController {
  @Get()
  getNested(@Req() req) {
    return {
      code: 200,
      message: '嵌套路径',
      url: req.url,
    };
  }
}
