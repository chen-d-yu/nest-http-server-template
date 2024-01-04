/**
 * 参数装饰器，借用http方法装饰器的例子，需求：解析返回的res，得到data数据
 * 多个装饰器的执行顺序为：最小->最大，参数->属性->方法->类
 * 参数装饰器最常用的场景就是配合 reflect-metadata 元数据使用
 *
 * target：
 * 对于静态成员来说，target => target.prototype.constructor，也就是当前类的构造函数
 * 对于实例成员来说，target => target.prototype，也就是当前类的原型对象
 *
 * propertyKey：当前装饰的方法名称
 *
 * parameterIndex：当前装饰的参数索引位置
 */
import axios from "axios";
import "reflect-metadata";

interface IParams {
  page: number;
  size: number;
}

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
      const key = Reflect.getMetadata("key", target, propertyKey) as string;

      return original.call(
        this,
        ...args,
        key ? responseData[key] : responseData,
      );
    };
  };
};

const Result = (key: string): ParameterDecorator => {
  return (target: Object, propertyKey: string | symbol | undefined) => {
    // 记录数据，方便方法装饰器校验处理
    Reflect.defineMetadata("key", key, target, propertyKey as string | symbol);
  };
};

class Http {
  @Get("https://api.apiopen.top/api/getHaoKanVideo")
  public getList(params: IParams, @Result("result") data?: any) {
    console.log("🚀 ~ data", data);
  }
}

new Http().getList({ page: 1, size: 5 });
