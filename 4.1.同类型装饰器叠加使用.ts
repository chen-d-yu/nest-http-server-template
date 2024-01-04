/**
 * 对同一个目标应用多个装饰器，它们呈现的顺序是 `Koa洋葱模型`的顺序。也就是先会执行外层的装饰器代码，再执行调用内从的装饰器代码。
 * 会先按定义顺序执行evaluate打印，再按照装饰顺序执行call打印
 */
const OrderDecorator: (key: string) => ClassDecorator = (key) => {
  console.log("evaluate:  ", key);
  return (target) => {
    console.log("call:  ", key);
    return target;
  };
};

@OrderDecorator("class A")
@OrderDecorator("class B")
class User {}

export {};
