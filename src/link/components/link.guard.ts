import { CanActivate, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LinkGuard implements CanActivate {
  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    console.log('局部守卫');
    return true;
  }
}
