/**
 * 装饰器可以对一个类进行叠加使用，不同类型的装饰器（类、方法、参数）
 * 它们的执行顺序为 从小到大，从下往上的顺序执行
 * 每个装饰器在初始化时（即使class未被实例化）触发一次，在全局仅此触发一次
 */

// 类装饰器
const ClassDecorator1 =<T extends { new (...args: any[]): {} }>(target: T) =>{
  console.log('类装饰器1')
}

const ClassDecorator2 =<T extends { new (...args: any[]): {} }>(target: T) =>{
  console.log('类装饰器2')
}

// 方法装饰器
const MethodDecorator1:MethodDecorator =()=>{
  console.log('方法装饰器1')
}
const MethodDecorator2:MethodDecorator =() =>{
  console.log('方法装饰器2')
}

const PropertyDecorator1:PropertyDecorator = (target: Object, propertyKey: string | symbol) =>{
  console.log('属性装饰器1')
}

const PropertyDecorator2:PropertyDecorator  = (target: Object, propertyKey: string | symbol) =>{
  console.log('属性装饰器2')
}

const ParameterDecorator1 =(target: Object, propertyKey: string | symbol | undefined, parameterIndex: number)  =>{
  console.log('参数装饰器1')
}

const ParameterDecorator2 =(target: Object, propertyKey: string | symbol | undefined, parameterIndex: number)  =>{
  console.log('参数装饰器2')
}

@ClassDecorator2
@ClassDecorator1
class OverlayTest{
  @PropertyDecorator2
  @PropertyDecorator1
  name:string
  constructor(@ParameterDecorator2 @ParameterDecorator1 name:string) {
    this.name = name
  }

  @MethodDecorator2
  @MethodDecorator1
  test(){}
}