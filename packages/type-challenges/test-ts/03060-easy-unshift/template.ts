type Unshift<T extends unknown[], U extends unknown> = [U, ...T];

// js
function unshift (arr: unknown[], val: unknown) {
  return [val, ...arr];
}