import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response, Request } from 'express';

@Catch()
export class AuthFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // 取得上下文
    const ctx = host.switchToHttp();
    // 响应对象
    const response = ctx.getResponse<Response>();
    // 请求对象
    const request = ctx.getRequest<Request>();
    // 异常状态码
    const status = exception.getStatus();

    response
      // 响应状态
      .status(status)
      // 响应返回征文
      .send({
        message: exception.message,
        path: request.url,
        method: request.method,
        failed: true,
        data: null,
      });
  }
}
