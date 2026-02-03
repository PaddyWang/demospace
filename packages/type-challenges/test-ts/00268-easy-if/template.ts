type If<C extends boolean, T, F> = C extends true ? T : F;

// js

// function myIf (C, T, F) {
//   return C ? T : F;
// }

// 知识点
// 类型兼容性 ｜ 分配规则
// null 严格模式和非严格模式区别
// 