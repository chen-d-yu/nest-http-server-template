import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class Pipe implements PipeTransform {
  transform(value: any) {
    console.log('全局管道');
    return value;
  }
}
