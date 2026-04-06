export {};

/*
function add(a:number, b:number ){
    return a + b;
}

const result = add(2, 3);
console.log(result);
*/

type MyOperation = (a: number, b: number) => number;

const add: MyOperation = (a, b) => a + b;
const result = add(2, 3);
console.log(result);

const multiply: MyOperation = (a, b) => a * b;
const result2 = multiply(2, 3);
console.log(result2);

const divide: MyOperation = (a, b) => {
    if(b===0) throw new Error('0으로 나눌 수 없다.');
    return a / b;
};
const result3 = divide(2, 0);
console.log(result3);