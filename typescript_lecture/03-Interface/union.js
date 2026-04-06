"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var value; // value는 string 또는 number 타입을 가질 수 있다.
value = 'Hello';
value = 123;
value = true; // 오류: boolean 타입이 선언되어 있지 않으면 허용되지 않음.
function printLength(value) {
    if (typeof (value) === 'string') {
        return value.length;
    }
    else {
        return value.toFixed(2); // 소수점 2자리로 고정
    }
}
var result = printLength('hello world');
var result2 = printLength(3.14159);
console.log(result, result2);
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () { return '멍멍'; };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () { return '야옹'; };
    return Cat;
}());
function speak(animal) {
    if (animal instanceof Dog) {
        return animal.bark();
    }
    else {
        return animal.meow();
    }
}
var dog = new Dog();
var cat = new Cat();
speak(dog);
speak(cat);
console.log(speak(dog));
console.log(speak(cat));
