import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Injectable } from "@nestjs/common";
import { Response, Request } from "express";
import { AppService } from "../app.service";

@Catch()
@Injectable()
export class HttpExceptionFilter implements ExceptionFilter {
  // constructor(private readonly appService: AppService) {}

  catch(exception: HttpException, host: ArgumentsHost): any {
    // 取得上下文
    const ctx = host.switchToHttp();
    // 响应对象
    const response = ctx.getResponse<Response>();
    // 请求对象
    const request = ctx.getRequest<Request>();
    // 错误对象
    const reason = exception.getResponse() as object;

    response.send({
      ...reason,
      path: request.url
    });
  }
}
