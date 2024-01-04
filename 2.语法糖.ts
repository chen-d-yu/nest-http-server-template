/**
 * class装饰器只是一种语法糖，本质上是一个普通的函数
 * 以下两种写法是完全等价的，
 * class装饰器的本质是把class的构造函数传递进装饰器函数中，然后对该构造函数进行原型方法的增强
 */

// 装饰器语法糖
const Decorator: ClassDecorator = (target) => {
  target.prototype.name = "class装饰器";
};

// 1.语法糖写法
@Decorator
class SyntacticSugar {
  constructor() {
    console.log((this as any).name);
  }
}

// 2.函数写法
Decorator(SyntacticSugar);

new SyntacticSugar();
