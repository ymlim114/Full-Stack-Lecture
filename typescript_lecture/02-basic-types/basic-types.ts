// 기본 타입
let ages:Number = 30;
let username:String = "홍길동";
let isActives:Boolean = true;
console.log(age);
console.log(username)
console.log(isActives);

// 배열 타입
let number1: number[] = [1, 2, 3];
let name1: string[] = ["html", "css"];

let number2: Array<number> = [1, 2, 3];
let name2:Array<string> = ["html", "css"];

console.log(number1, number2);
console.log(name1, name2);

// 타입 추론
let counts = 5; //number로 추론