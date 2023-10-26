import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ParameterException } from '../exception/parameter.exception';

@Catch(ParameterException)
export class ValidateExpceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();
    console.log(exception);
    if (exception instanceof ParameterException) {
      return res.status(exception.getStatus()).json({
        message: '参数错误',
        path: req.path,
        method: req.method,
        failed: true,
        data: null,
      });
    }

    return res;
  }
}
