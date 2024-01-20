import { Request, Response, NextFunction } from "express";
export function functionalLogger(req: Request, res: Response, next: NextFunction) {
  console.log("functional middleware: Request...");
  next();
}
