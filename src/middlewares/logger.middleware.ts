import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { AppService } from "../app.service";

export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly appService: AppService) {} // [!code ++]
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request...");

    next();
  }
}
