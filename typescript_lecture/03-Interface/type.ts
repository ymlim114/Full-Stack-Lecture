export {};

type Point = {
    x: number,
    y: number
};

interface Pointx {
    x:number,
    y:Number
};

type Point3D = Point & { z: number };

const point: Point = { x: 10, y: 20};
const pointx:Pointx = { x: 10, y: 20 };
const point3D: Point3D = { x: 10, y: 20, z: 30 };

// 튜플
let arr:string[] = ['홍길동', '이도령'];
let tupleMember: [string, number];
tupleMember = ['홍길동', 30];   // 순서와 값의 타입 일치해야 함.

// 튜플 + 타입 활용
type UserInfo = [number, string, boolean];  // 튜플 형식을 type으로 지정

const userA:UserInfo = [1, '홍길동', true];
const userB:UserInfo = [2, '이도령', false];
const userC:UserInfo = [3, '성춘향', true];

console.log(userA);
console.log(userB);
console.log(userC);