import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export class UserPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    //    if (!value.name) {
    //      throw new HttpException('用户名并不能为空', HttpStatus.BAD_REQUEST);
    //    }
    //
    //    if (!value.password) {
    //      throw new HttpException('密码并不能为空', HttpStatus.BAD_REQUEST);
    //    }

    // 1. 根据DTO类,借助 class-transformer 插件实例化对象
    const userDto = plainToInstance(metadata.metatype, value);

    // 2. 根据DTO类属性的 装饰器验证规则rules，获得一组特殊的Dto对象，它们包含验证rules，然后对这组数据进行校验
    const errors = await validate(userDto);

    // 3. 如果errors长度为0，说明所有验证通过，否则校验失败，返回错误信息给前端
    if (errors.length) {
      throw new HttpException(
        errors.map((item) => Object.values(item.constraints)[0]),
        HttpStatus.BAD_REQUEST,
      );
    }

    return value;
  }
}
