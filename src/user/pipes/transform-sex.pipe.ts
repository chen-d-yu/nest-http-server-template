import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class TransformSexPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (value > 1) {
      throw new BadRequestException('性别只能是0或者1');
    }

    return value ? '男' : '女';
  }
}
