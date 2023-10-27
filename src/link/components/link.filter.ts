import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class LinkFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    console.log('局部过滤器');
    return res.send();
  }
}
