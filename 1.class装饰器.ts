/**
 * 1.类装饰器
 * 装饰器的定义就是个切面函数
 * 类装饰器就是对class进行切面增强
 * 其中有一个target参数，表示为当前需要增强的class的构造函数
 * 常见的操作就是拿到需要增强的类，在它的原型对象进行切面增强
 */

const LoggerDecorator =  <T extends { new (...args: any[]): {} }>(target: T)=>{
  console.log('无须new实例，类装饰器也会执行')
}

@LoggerDecorator
class Animal{}
