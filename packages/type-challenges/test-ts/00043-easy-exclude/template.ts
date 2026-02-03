type MyExclude<T, U> = T extends U ? never : T;

type M = MyExclude<'a' | 'b', 'b'>;

// js
// ['a', 'b', 'c']
// ['a']
// function MyExclude (T: [], U: []): [] {
//   const resule = [];
//   for (let i = 0; i < T.length; i++) {
//     const t = T[i];
//     let boo = false;
//     for (let j = 0; j < U.length; j++) {
//       const u = U[j];
//       if (t === u) {
//         boo = true
//       }
//     }
//     if (!boo) {
//       resule.push(t);
//     }
//   }
//   return resule;
// }