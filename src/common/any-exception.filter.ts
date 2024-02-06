import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";

export class AnyExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log(exception);
  }
}
