type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

// keyof array -> 索引
type Result = TupleToObject<typeof tuple>;


/*
function tupleToObject (array) {
  const obj = {}
  array.forEach(item => {
    obj[item] = item
  })
  return obj
}
*/

// 1. 返回一个对象
// 2. 遍历 array  T[number]