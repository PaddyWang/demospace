type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer X) => any ? X : never;


function foo(arg1: string, arg2: number): void {}
type x = MyParameters<typeof foo>

type y = typeof foo


// js
function myParameters (...args: unknown[]) {
  return args.map(arg => typeof arg);
}

// 知识点
// 1. infer
// 参考资料：