import { Injectable, Scope } from "@nestjs/common";

// 单例作用域： default scope is singleton
// @Injectable()
// export class AService {
//   private readonly list: Array<string> = [];
//
//   pushItem(item: string) {
//     this.list.push(item);
//   }
//
//   getList() {
//     return this.list;
//   }
// }

// 请求作用域：request scope is acts on every request
// @Injectable({ scope: Scope.REQUEST })
// export class AService {
//   private readonly list: Array<string> = [];
//
//   pushItem(item: string) {
//     this.list.push(item);
//   }
//
//   getList() {
//     return this.list;
//   }
// }

// 瞬态作用域：transient scope is isolation at the controller level
@Injectable({ scope: Scope.TRANSIENT })
export class AService {
  private readonly list: Array<string> = [];

  pushItem(item: string) {
    this.list.push(item);
  }

  getList() {
    return this.list;
  }
}
