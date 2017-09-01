function sum(x: number, y: number): number {
  return x + y;
}

let x: number = sum(1, 2);

let mySum: (x: number, y: number) => number = (a: number, b: number) => (a + b);

interface Func {
  (x: number, y: number): boolean
}

let func: Func = function(x: number, y: number): boolean {
  return x > y;
}

interface Util {
  lessThan: (x: number, y: number) => boolean;
  a: number
}

let common: Util = {
  lessThan: function(x: number, y: number): boolean {
    return x > y;
  },
  a: 8
}