function sum(x, y) {
    return x + y;
}
var x = sum(1, 2);
var mySum = function (a, b) { return (a + b); };
var func = function (x, y) {
    return x > y;
};
var common = {
    lessThan: function (x, y) {
        return x > y;
    },
    a: 8
};
function test(x) {
    if (typeof x === 'number') {
        console.log('number');
    }
    else {
        console.log('boolean');
    }
}
