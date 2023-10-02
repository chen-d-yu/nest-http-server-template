/**
 * 所谓的装饰器工厂，其实就是高阶函数，
 * 为了能让装饰器接收参数，所以使用函数返回另外一个处理过后的函数
 * 传递一个参数，返回一个装饰器方法
 * 这个参数可以是函数，可以是类型
 */

const DecoratorFactory = (type: string): ClassDecorator => {
  return function (target) {
    target.prototype.name = `当前的装饰器类型是 ${type}`;
  };
};

@DecoratorFactory("factory")
class Factory {}

@DecoratorFactory("person")
class Person {}

console.log("🚀 ~ 芜湖，爷来辣", (new Animal() as any).name);
console.log("🚀 ~ 芜湖，爷来辣", (new Person() as any).name);
