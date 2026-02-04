type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false;


// js
function includes (list: any[], key: any) {
  function _ (list: any[], key: any) {
    if (list.length === 0) return false;
    const [first, ...rest] = list;
    if (first === key) {
      return true;
    } else {
      return _(rest, key);
    }
  }

  return _(list, key);
}

// 知识点
// 1. 用递归实现遍历数组
// 2. ts 的模块规范
//    - 如果有 export/import 的话 那么就是模块
//    - 如果没有 那么就是全局的 可以直接在别的模块引用