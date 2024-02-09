import { NestMiddleware } from "@nestjs/common";

export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void): any {
    console.log("Request...");
    next();
    console.log("Response...");
  }
}
