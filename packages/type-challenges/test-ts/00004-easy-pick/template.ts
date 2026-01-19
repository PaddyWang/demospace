type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}


// 对于TS 可以通过JS对比的方法进行学习

/*
function myPick (todo, keys) {
  const res = {}
  keys.forEach(key => {
    if (key in todo) {
      res[key] = todo[key]
    }
  })
  return res
}
*/

// 1. 返回一个对象
// 2. 遍历 forEach -> 映射类型 [P in K]   [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content)
// 3. 取值 todo[key] -> T[P]   [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content)
// 4. 看 key 在不在 todo 里面
//   4.1. keyof  [Lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html)
//   4.2. extends 约束条件