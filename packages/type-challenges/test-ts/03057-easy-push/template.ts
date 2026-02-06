type Push<T extends Value[], U extends Value> = [...T, U];

// js
type Value = number | string | boolean;
function push (arr: Value[], val: Value) {
  return [...arr, val];
}