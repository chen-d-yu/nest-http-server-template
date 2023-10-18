import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import * as dayjs from 'dayjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = dayjs();
    return next.handle().pipe(
      tap((response) => {
        const host = context.switchToHttp(); // 获取请求的主机
        const request = host.getRequest(); // 获取请求参数
        const responseTime = dayjs().diff(start); // 响应时间，请求时间 - 当前时间 = 响应时间

        // 日志输出 请求方法 请求路径 响应时间ms 响应数据
        this.logger.log(
          `${request.method} ${request.url} ${responseTime}ms ${response}`,
        );
      }),
    );
  }
}
