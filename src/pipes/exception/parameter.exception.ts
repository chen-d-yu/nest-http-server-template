import { HttpException, HttpStatus, ValidationError } from '@nestjs/common';

export class ParameterException extends HttpException {
  constructor(response: string | Record<string, any> | ValidationError[]) {
    super(response, HttpStatus.OK);
  }
}
