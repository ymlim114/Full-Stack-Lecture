"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user1 = { id: 1, name: '홍길동', age: 30 };
var user2 = { id: 2, name: '이도령' };
// const user3: iUser = {id:3}  name 필수, Error
console.log(user1);
console.log(user2);
user2.name = '성춘향';
console.log(user2);
// user2.id = 3; // Error, id는 읽기 전용
var user3 = { id: 3, name: '이영희', employeeId: 101 };
console.log(user3);
var user4 = { id: 4, name: '이영희', age: 25, birthDate: '1990-01-01' };
console.log(user4);
