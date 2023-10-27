import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class LinkPipe implements PipeTransform {
  transform(value: any) {
    console.log('局部管道');
    return value;
  }
}
