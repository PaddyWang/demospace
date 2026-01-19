type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}


/*
function readonly (obj) {
  const result = {}
  for (const key in obj) {
    result['readonly' + key] = obj[key]
  }
  return result
}
*/
// 1. 返回一个对象
// 2. 遍历 obj  in -> mapped  keyof -> lookup
// 3. 加上 readonly 修饰符
// 4. 通过 key 来获取 obj 里的值  indexed