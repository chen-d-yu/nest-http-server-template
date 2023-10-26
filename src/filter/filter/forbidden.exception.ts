import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor(response: string | Record<string, any>) {
    super(response, HttpStatus.FORBIDDEN);
  }
}
