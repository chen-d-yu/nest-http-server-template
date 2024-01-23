import { Body, Controller, ForbiddenException, Get, Post, UseFilters, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthGuard } from "./guards/auth.guard";
import { users } from "./constants/user.mock";
import { AUTH_PWD_OR_ACCOUNT_ERROR } from "./filters/error-code";
import { JwtService } from "@nestjs/jwt";
import { HttpExceptionFilter } from "./filters/http-exception.filter";

@UseFilters(HttpExceptionFilter)
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly jwtService: JwtService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("login")
  login(@Body() body: Record<string, any>) {
    const { name, password } = body;

    const user = users.find((user) => user.name === name && user.password === password);

    if (!user) {
      throw new ForbiddenException({
        errorCode: AUTH_PWD_OR_ACCOUNT_ERROR.errorCode,
        message: AUTH_PWD_OR_ACCOUNT_ERROR.message,
        code: AUTH_PWD_OR_ACCOUNT_ERROR.code
      });
    }

    return this.generateToken(user);
  }

  /**
   * 根据用户字段生成token
   * @param name
   * @param id
   * @private
   */
  private async generateToken({ name, id }: Record<string, any>) {
    return {
      token: await this.jwtService.signAsync({ name, sub: id })
    };
  }
}
