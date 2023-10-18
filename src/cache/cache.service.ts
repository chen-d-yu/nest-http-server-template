import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  private cacheData: Record<string, any> = {};

  public getCache() {
    return this.cacheData;
  }

  public getCacheItem(key: string) {
    return this.cacheData[key] || undefined;
  }

  public setCache(key: string, value: any) {
    this.cacheData[key] = value;
  }

  // 模拟从数据库中查找数据
  findOne(id: number) {
    const user = [
      {
        id: 1,
        name: '张三',
      },
      {
        id: 2,
        name: '李四',
      },
      {
        id: 3,
        name: '王五',
      },
    ];

    return user.filter((item) => item.id === id)[0];
  }
}
