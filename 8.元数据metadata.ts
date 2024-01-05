/**
 * 元数据 metadata
 */

import "reflect-metadata";

function validate(target: Object, key: string, descriptor: PropertyDescriptor) {
  const originalFn = descriptor.value;

  // 获取参数的编译期类型
  const designParamTypes = Reflect.getMetadata(
    "design:paramtypes",
    target,
    key,
  );

  descriptor.value = function (...args: any[]) {
    args.forEach((arg, index) => {
      const paramType = designParamTypes[index];

      const result = arg.constructor === paramType || arg instanceof paramType;

      if (!result) {
        throw new Error(
          `Failed for validating parameter: ${arg} of the index: ${index}`,
        );
      }
    });

    return originalFn.call(this, ...args);
  };
}

class C {
  @validate
  sayRepeat(word: string, x: number) {
    return Array(x).fill(word).join("");
  }
}

const c = new C();
c.sayRepeat("hello", 2); // pass
c.sayRepeat("", "lol" as any); // throw an error
