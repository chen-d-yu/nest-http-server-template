/**
 *
 * target：对于静态成员来说是类的构造器，对于实例成员来说是类的原型链。
 *
 * propertyKey：当前修饰的方法的方法名称
 *
 * descriptor：当前修饰的方法的描述符，毕竟方法也是属于对象上的一个属性，所以拥有属性描述符
 *
 * @返回： 如果返回了值，它会被用于替代属性的描述器。
 */
import axios from "axios";

const LoggerDecorator: MethodDecorator = function (
  target,
  propertyKey,
  descriptor: PropertyDescriptor,
) {
  const original = descriptor.value as Function;

  descriptor.value = function (...args: any[]) {
    console.log("params: ", ...args);
    const result = original.call(this, ...args);
    console.log("result: ", result);
    return result;
  };
};
class LoggerTest {
  @LoggerDecorator
  add(x: number, y: number) {
    return x + y;
  }
}
const l = new LoggerTest();
l.add(1, 2);

// 最小Get装饰器案例
const Get = (url: string): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) => {
    const original = descriptor.value as Function;

    descriptor.value = async function (...args: any[]) {
      const params = Object.keys(args[0] as IParams).reduce(
        (prev, item, currentIndex, array) => {
          prev += `${currentIndex === 0 ? "?" : "&"}${item}=${args[0][item]}`;
          return prev;
        },
        "",
      );
      const response = await axios.get(url + params);
      const responseData = response.data;

      console.log("params: ", ...args);
      const result = original.call(this, ...args, responseData);
      console.log("result: ", result);
      return result;
    };
  };
};

interface IParams {
  page: number;
  size: number;
}

class Http {
  @Get("https://api.apiopen.top/api/getHaoKanVideo")
  public getList(params: IParams, data?: any) {
    console.log("🚀 ~ data", data);
    return data;
  }
}

new Http().getList({ page: 1, size: 5 });

export {};
