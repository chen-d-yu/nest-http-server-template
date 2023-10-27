import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LinkMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('局部中间件-before');
    next();
    console.log('局部中间件-after');
  }
}
