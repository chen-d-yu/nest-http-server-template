import { PassportStrategy } from '@nestjs/passport';
import { Strategy, IStrategyOptions } from 'passport-local';
import { BadRequestException, Inject } from '@nestjs/common';
import { User } from './dto/user.dto';

export class LocalStragety extends PassportStrategy(Strategy, 'local') {
  constructor(@Inject('userData') private readonly userData: User[]) {
    super({
      usernameField: 'name',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(name: string, password: string): Promise<any> {
    // 本地策略的逻辑，先从数据库中查找当前用户，然后返回当前用户，交由给下一步进行处理

    const user = this.userData?.find((user) => {
      return user.name === name && user.password === password;
    });

    if (!user) {
      throw new BadRequestException('用户名或密码不正确');
    }

    return user;
  }
}
