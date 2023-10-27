import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class Filter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    console.log('全局过滤器');
    return res.send();
  }
}
