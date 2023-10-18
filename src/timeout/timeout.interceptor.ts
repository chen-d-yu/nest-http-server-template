import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  catchError,
  Observable,
  throwError,
  timeout,
  TimeoutError,
} from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const timeoutVal = context.switchToHttp().getRequest().timeout || 3000;
    return next.handle().pipe(
      timeout(timeoutVal),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          throw new RequestTimeoutException('请求超时');
        }

        return throwError(err);
      }),
    );
  }
}
