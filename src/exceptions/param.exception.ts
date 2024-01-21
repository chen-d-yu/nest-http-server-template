import { HttpException } from "@nestjs/common";
import { HttpExceptionOptions } from "@nestjs/common/exceptions/http.exception";

export class ParamException extends HttpException {
  constructor(response: string | Record<string, any>, status: number, options?: HttpExceptionOptions) {
    super(response, status, options);
  }
}
