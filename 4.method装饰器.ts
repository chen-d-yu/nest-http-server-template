/**
 *
 * target：
 * 如果方法装饰器装饰的是静态方法（也就是static方法），那么target表示的是当前类的构造函数 => target.prototype.constructor
 * 如果方法装饰器装饰的是原型方法（也就是类内部的实例方法），target表示的是当前类的原型对象 => target.prototype
 *
 * propertyKey：当前修饰的方法的方法名称
 *
 * descriptor：当前修饰的方法的描述符，毕竟方法也是属于对象上的一个属性，所以拥有属性描述符
 */
import axios from "axios";

const Get = (url: string): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    console.log("🚀 ~ target", target);

    console.log("🚀 ~ propertyKey", propertyKey);

    const method = descriptor.value as Function;
    axios.get(url).then((res:any) => {
      method(res);
    });

    // 为了不改变this的指向，新的切面函数必须总是使用函数表达式，而不是使用箭头函数
    descriptor.value = function (...args: any[]) {
      console.log("🚀 ~ Before");

      console.log("🚀 ~ after");
    };
  };
};

class Http {
  @Get("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=5")
  public getList(data: any) {
    console.log("🚀 ~ data", data.data);
  }
}

new Http();
