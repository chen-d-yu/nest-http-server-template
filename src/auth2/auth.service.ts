import { Inject, Injectable } from '@nestjs/common';
import user from '../data/user.json';
import { JwtService } from '@nestjs/jwt';
import { User } from './dto/user.dto';
@Injectable()
export class AuthService {
  constructor(
    @Inject('userData') private readonly userData: typeof user,
    private readonly jwtService: JwtService,
  ) {}

  login(userDto: User) {
    // 改造为 passport 方案
    //    const user = this.userData?.find((user) => {
    //      return user.name === userDto.name && user.password === userDto.password;
    //    });
    //
    //    if (!user) {
    //      return {
    //        errCode: 100053,
    //        msg: '用户名或密码不正确',
    //      };
    //    }

    return this.generateToken(userDto);
  }

  async generateToken({ name, id }: User) {
    return {
      token: await this.jwtService.signAsync({ name, sub: id }),
    };
  }
}
