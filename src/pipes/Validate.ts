import { ValidationPipe, ValidationError } from '@nestjs/common';

export class Validate extends ValidationPipe {
  protected mapChildrenToValidationErrors(
    error: ValidationError,
    parentPath?: string,
  ): ValidationError[] {
    const errors = super.mapChildrenToValidationErrors(error, parentPath);

    errors.forEach((item) => {
      for (const key in item.constraints) {
        item.constraints[key] = `${item.property}-${item.constraints[key]}`;
      }
    });

    return errors;
  }
}
