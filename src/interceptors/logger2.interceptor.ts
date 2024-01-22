import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, of, tap } from "rxjs";

export class LoggerInterceptor2 implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): any {
    console.log("2-----Before...");
    const now = Date.now();
    return next.handle().pipe(tap(() => console.log(`2-----After... ${Date.now() - now}ms`)));
  }
}
