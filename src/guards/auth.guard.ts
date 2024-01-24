import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
import { AUTH_PWD_OR_ACCOUNT_ERROR } from "../filters/error-code";
import { JwtService } from "@nestjs/jwt";
import { TOKEN_SECRET } from "../constants/config";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new ForbiddenException({
        errorCode: AUTH_PWD_OR_ACCOUNT_ERROR.errorCode,
        message: AUTH_PWD_OR_ACCOUNT_ERROR.message,
        code: AUTH_PWD_OR_ACCOUNT_ERROR.code
      });
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: TOKEN_SECRET
      });
      // 在这里我们将 payload 挂载到请求对象上
      // 以便我们可以在路由处理器中访问它
      request["user"] = payload;
    } catch {
      throw new ForbiddenException({
        errorCode: AUTH_PWD_OR_ACCOUNT_ERROR.errorCode,
        message: AUTH_PWD_OR_ACCOUNT_ERROR.message,
        code: AUTH_PWD_OR_ACCOUNT_ERROR.code
      });
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
