import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeoutService {
  async findAll() {
    await new Promise((resolve) => setTimeout(resolve, 4000)); // 6 seconds
    return {
      user: '张三',
      age: 18,
    };
  }
}
