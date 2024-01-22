import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, of, tap } from "rxjs";

export class LoggerInterceptor3 implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): any {
    console.log("3-----Before...");
    const now = Date.now();
    return next.handle().pipe(tap(() => console.log(`3-----After... ${Date.now() - now}ms`)));
  }
}
