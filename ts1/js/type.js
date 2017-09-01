var six = 6;
var isDone = true;
var str = 'World';
var sentence = "Hello, " + str;
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
function alertName() {
    alert('zzz');
}
var unusable = undefined;
var unusable2 = null;
// let unusable3: void = 3; // error TS2322: Type '3' is not assignable to type 'void'.
var num = undefined;
var u = undefined;
var num2 = u;
var u2 = undefined;
// let num3: number = u2; // error TS2322: Type 'void' is not assignable to type 'number'.
var anyType = 'anytype';
anyType = 7;
anyType = true;
anyType = undefined;
