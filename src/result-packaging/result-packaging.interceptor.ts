import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

enum HttpStatusEnum {
  SUCCESS = 200,
  NOT_CONTENT = 204,
  SEE_OTHER = 303,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

interface Result<T> {
  status: number; // 正常返回200
  message: string | null;
  failed?: boolean; // 错误出现
  type?: string; // 错误出现，错误等级
  data: T;
}

@Injectable()
export class ResultPackagingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('拦截器前');
    return next.handle().pipe(
      map((data): Result<any> => {
        console.log('拦截器后');
        const message = data?.message || '操作成功';
        return {
          status: HttpStatusEnum.SUCCESS,
          data,
          message,
        };
      }),
    );
  }
}
