import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('全局中间件-before');
    next();
    console.log('全局中间件-after');
  }
}
