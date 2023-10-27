import { CanActivate, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class Guard implements CanActivate {
  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    console.log('全局守卫');
    return true;
  }
}
