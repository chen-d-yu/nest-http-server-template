import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler()); // 从上下文中取出守卫设置的元数据，也就是@SetMetadata中的键值对
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return matchRoles(roles, user.roles); // 此方法根据业务书写，在这里仅做逻辑展示
  }
}
function matchRoles(roles: string[], userRoles: string) {
  return roles.includes(userRoles);
}
