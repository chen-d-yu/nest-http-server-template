import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, of } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { CACHE_KEY } from './canstant/cache';
import { CacheService } from './cache.service';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  constructor(private readonly cacheService: CacheService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isCanCache =
      Reflect.getMetadata(CACHE_KEY, context.getHandler()) ||
      Reflect.getMetadata(CACHE_KEY, context.getClass()); // 判断接口方法是否需要走缓存逻辑

    const request = context.switchToHttp().getRequest();
    if (isCanCache) {
      // 需要走缓存
      const cacheKey = this.redisCacheKey(request.method, request.url);
      const cacheData = this.cacheService.getCacheItem(cacheKey);

      console.log(cacheData); // 第二次请求时，如果这条打印了，证明是有缓存的存在

      if (!cacheData) {
        // 无缓存时，把数据设置为缓存
        return next.handle().pipe(
          map((data) => {
            this.cacheService.setCache(cacheKey, data);
            return data;
          }),
        );
      } else {
        // 取出缓存，直接返回
        return of(cacheData);
      }
    }
    return next.handle();
  }

  private redisCacheKey(method: string, url: string): string {
    return `${method}:${url}`;
  }
}
