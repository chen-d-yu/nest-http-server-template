const PrintDecorator: (key: string) => any = (key) => {
  console.log("解释: ", key);
  return function () {
    console.log("执行: ", key);
  };
};

@PrintDecorator("类")
class C {
  @PrintDecorator("静态属性")
  static prop?: number;

  @PrintDecorator("静态方法")
  static method(@PrintDecorator("静态方法参数") foo: any) {}

  constructor(@PrintDecorator("构造器参数") foo: any) {}

  @PrintDecorator("实例方法")
  method(@PrintDecorator("实例方法参数") foo: any) {}

  @PrintDecorator("实例属性")
  prop?: number;
}

export {};
