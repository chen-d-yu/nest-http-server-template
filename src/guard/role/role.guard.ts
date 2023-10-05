import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // return true; // nest会放行进入到控制器方法中
    return false; // nest会抛出错误，实际上是触发这行代码 throw new UnauthorizedException(); 得到403的响应结果
  }
}
