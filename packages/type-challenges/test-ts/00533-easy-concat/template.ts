type ConcatValue = boolean | number | string
type Concat<T extends readonly ConcatValue[], U extends readonly ConcatValue[]> = [...T, ...U];


// js
function concat (T: any[], U: any[]) {
  return [...T, ...U];
}

type First<T extends ConcatValue[]> = T extends [infer F, ...infer _] ? F : never;
type x = First<[1, 2, 3]>

type Last<T extends ConcatValue[]> = T extends [...infer _, infer F] ?  F : never;
type y = Last<[1, 2, 3]>