import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class BaseUseCaseFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
