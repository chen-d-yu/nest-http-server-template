/**
 * 属性装饰器，对属性的装饰器，只有两个参数，一个是target，一个是当前装饰的属性名称
 *
 */
// 校验长度
const MinLength = (length: number): PropertyDecorator => {
  return (target: Object, propertyKey: string | symbol) => {
    let value: string;
    let descriptor: PropertyDescriptor = {
      set(v: string) {
        if (v.length < length) {
          throw new Error(`密码长度不能低于${length}位`);
        }

        value = v;
      },
      get() {
        return value;
      },
    };

    Object.defineProperty(target, propertyKey, descriptor);
  };
};

class User {
  @MinLength(6)
  public password: string;

  constructor(password: string) {
    this.password = password;
  }
}

new User("123");

// const userRoles: string[] = [];
//
// // 通过属性装饰器把角色赋值给userRoles
// const RoleDerorator = (roles: string[]) => (target: any, key: string) => {
//   roles.forEach((role) => userRoles.push(role));
// };
//
// // 根据userRoles生成Roles对象并赋值给类原型的roles属性
// const SetRoleDerorator = <
//   T extends new (...args: any[]) => {
//     [key: string]: any;
//   },
// >(
//   constructor: T,
// ) => {
//   const roles = [
//     { name: "super-admin", desc: "超级管理员" },
//     { name: "admin", desc: "管理员" },
//     { name: "user", desc: "普通用户" },
//   ];
//   return class extends constructor {
//     constructor(...args: any) {
//       super(...args);
//       this.roles = roles.filter((role) => userRoles.includes(role.name));
//     }
//   };
// };
//
// @SetRoleDerorator
// class UserEntity {
//   @RoleDerorator(["admin", "user"])
//   roles: string[] = [];
// }
//
// export const exp5 = () => {
//   console.log();
//   console.log("-----------------------示例5:属性装饰器-----------------------");
//   console.log(
//     "-----------------------使用装饰器根据权限过滤用户列表-----------------------",
//   );
//   console.log();
//   const user = new UserEntity();
//   console.log(user.roles);
//   console.log();
//   console.log("-----------------------示例5:执行完毕-----------------------");
// };
//
// // 控制台输出 [ { name: 'admin', desc: '管理员' }, { name: 'user', desc: '普通用户' } ]
//
export {};
