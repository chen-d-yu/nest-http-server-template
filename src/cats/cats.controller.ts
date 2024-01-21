import { Controller, Get, HttpException, HttpStatus, Inject, Param, Query, UseFilters } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { ParamException } from "../exceptions/param.exception";
import { AUTH_TOKEN_EXPIRED } from "../constants/exception-errorCode";
import { HttpExceptionFilter } from "../filters/http-exception.filter";
import { APP_FILTER } from "@nestjs/core";

@UseFilters(HttpExceptionFilter)
@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // @Get()
  // getHello(): string {
  //   // 系统异常
  //   // throw new HttpException(
  //   //   {
  //   //     message: "请求错误",
  //   //     error: true,
  //   //     statusCode: HttpStatus.BAD_REQUEST
  //   //   },
  //   //   HttpStatus.BAD_REQUEST
  //   // );
  //
  //   // 自定义异常
  //   throw new ParamException(
  //     {
  //       message: "参数错误",
  //       error: true,
  //       statusCode: HttpStatus.BAD_REQUEST
  //     },
  //     HttpStatus.BAD_REQUEST
  //   );
  // }

  // @UseFilters(HttpExceptionFilter)
  @Get()
  getHello(@Query("id") id: string): string {
    if (!id) {
      throw new HttpException(
        {
          error_code: AUTH_TOKEN_EXPIRED.errorCode,
          code: AUTH_TOKEN_EXPIRED.code,
          message: AUTH_TOKEN_EXPIRED.msg
        },
        HttpStatus.FORBIDDEN
      );
    } else {
      return "Hello World! " + id;
    }
  }
}
