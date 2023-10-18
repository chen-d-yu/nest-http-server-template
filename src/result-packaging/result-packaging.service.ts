import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateResultPackagingDto } from './dto/create-result-packaging.dto';
import { UpdateResultPackagingDto } from './dto/update-result-packaging.dto';

@Injectable()
export class ResultPackagingService {
  findAll() {
    return {
      name: '张三',
      age: 18,
    };
  }
}
