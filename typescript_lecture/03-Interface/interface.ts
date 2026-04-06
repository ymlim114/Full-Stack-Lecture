export {};

interface iUser {
    readonly id:number, // 읽기 전용
    name:string,
    age?:number     // 선택, 필수 X
}
// interface 확장
interface iEmployee extends iUser {
    employeeId:number
}

const user1: iUser = {id:1, name:'홍길동', age:30}
const user2: iUser = {id:2, name:'이도령'}
// const user3: iUser = {id:3}  name 필수, Error
console.log(user1);
console.log(user2);
user2.name = '성춘향';
console.log(user2);
// user2.id = 3; // Error, id는 읽기 전용
const user3:iEmployee = {id:3, name:'이영희', employeeId: 101}
console.log(user3);

// interface 병합
interface iUser {
    birthDate?:string
}
const user4: iUser = {id:4, name:'이영희', age:25, birthDate:'1990-01-01'}
console.log(user4);