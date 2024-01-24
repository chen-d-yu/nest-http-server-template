import { ForbiddenException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { AUTH_PWD_OR_ACCOUNT_ERROR } from "../filters/error-code";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * 对用户信息做验证，合法发放token，非法抛出异常4030000003
   * @param name
   * @param pwd
   */
  async signIn(name: string, pwd: string) {
    const user = await this.userService.findOneByName(name);

    if (!user || user.name !== name || user.password !== pwd) {
      throw new ForbiddenException({
        errorCode: AUTH_PWD_OR_ACCOUNT_ERROR.errorCode,
        message: AUTH_PWD_OR_ACCOUNT_ERROR.message,
        code: AUTH_PWD_OR_ACCOUNT_ERROR.code
      });
    }

    // 发放token
    const payload = { sub: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
