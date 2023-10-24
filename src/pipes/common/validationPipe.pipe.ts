import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    //    interface ArgumentMetadata {
    //      type: 'body' | 'query' | 'param' | 'custom';告诉我们是从数据传输过来的，还是从自定义参数
    //      metatype?: Type<unknown>;参数的元类型(js的八大类型)，不是ts的类型，此opts在需要限定参数类型时有用
    //      data?: string; 传递给装饰器的字符串，也就是@Param("id")中的id
    //    }

    console.log(typeof value);
    console.log(value); // value 是需要校验转换的值
    return value;
  }
}
