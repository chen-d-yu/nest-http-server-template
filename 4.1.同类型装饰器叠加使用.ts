// const MessageDecorator: ClassDecorator = (target) => {
//   console.log("MessageDecorator");
//   target.prototype.success = (data: any) => {
//     return {
//       code: 200,
//       data,
//       message: "成功~MessageDecorator",
//     };
//   };
// };
//
// const CallDecorator: ClassDecorator = (target) => {
//   console.log("CallDecorator");
//   target.prototype.success = (data: any) => {
//     return {
//       code: 200,
//       data,
//       message: "成功~CallDecorator",
//     };
//   };
// };

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
