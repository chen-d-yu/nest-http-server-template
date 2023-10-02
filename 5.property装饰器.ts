/**
 * 属性装饰器，对属性的装饰器，只有两个参数，一个是target，一个是当前装饰的属性名称
 *
 */

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

new User("123456");
