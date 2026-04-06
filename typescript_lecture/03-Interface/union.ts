export {};

let value:string | number | boolean;  // value는 string 또는 number 타입을 가질 수 있다.
value = 'Hello';
value = 123;
value = true;  // 오류: boolean 타입이 선언되어 있지 않으면 허용되지 않음.

function printLength(value: string | number) {
    if(typeof(value) === 'string') {
        return value.length;
    } else {
        return value.toFixed(2); // 소수점 2자리로 고정
    }
}
let result = printLength('hello world');
let result2 = printLength(3.14159);
console.log(result, result2);

class Dog {
    bark(){ return '멍멍'; }
}
class Cat {
    meow(){ return '야옹'; }
}

function speak(animal: Dog | Cat) {
    if(animal instanceof Dog) {
        return animal.bark();
    } else {
        return animal.meow();
    }
}

const dog = new Dog();
const cat = new Cat();
speak(dog);
speak(cat);
console.log(speak(dog));
console.log(speak(cat));