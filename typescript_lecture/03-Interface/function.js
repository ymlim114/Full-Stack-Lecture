"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add = function (a, b) { return a + b; };
var result = add(2, 3);
console.log(result);
var multiply = function (a, b) { return a * b; };
var result2 = multiply(2, 3);
console.log(result2);
var divide = function (a, b) {
    if (b === 0)
        throw new Error('0으로 나눌 수 없다.');
    return a / b;
};
var result3 = divide(2, 0);
console.log(result3);
