let six: number = 6;
let isDone: boolean = true;
let str: string = 'World';
let sentence: string = `Hello, ${str}`;
let arr: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3];

function alertName(): void {
  alert('zzz');
}

let unusable: void = undefined;
let unusable2: void = null;
// let unusable3: void = 3; // error TS2322: Type '3' is not assignable to type 'void'.

let num: undefined = undefined;

let u: undefined = undefined;
let num2: number = u;

let u2: void = undefined;
// let num3: number = u2; // error TS2322: Type 'void' is not assignable to type 'number'.

let anyType: any = 'anytype';
anyType = 7;
anyType = true;
anyType = undefined;

interface Person {
  name: string;
  age: number;
}

let scot: Person = {name: 'scot', age: 11};

interface Animal {
  name: string;
  age?: number;
}

let cat: Animal = {name: 'tom'};
let dog: Animal = {name: 'tom', age: 5};

interface School {
  readonly name: string;
  address: string;
  teachers?: number;
  students: number
}

let zx: School = {name: 'yzzx', address: 'dasdsasafsa', teachers: 10, students: 80};

let fib: number[] = [1,1,2,3,5,8,13];



