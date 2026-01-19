// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer F, ... infer Rest] ? F : never


// 知识点
// 1. extends 类型条件判断
// 2. 获取 tuple 的 length 属性  indexed
// 3. extends union 判断的规则
// 4. infer 的使用  推断

/*
function first (arr) {
  // T extends [infer F, ... infer Rest] ? F : never
  const [f, ...rest] = arr
  return f ? f : 'never'
  return arr[0]
}
  */