export {};

// 이름 내보내기(Named export)
export const add = (a:number, b:number):number => a + b;
export const sub = (a:number, b:number):number => a - b;

// 기본 내보내기(Default export)
export default class Calculator {
    constructor(private init = 0){}
    add(n:number){
        this.init += n;
        return this.init;
    }
    value(){
        return this.init;
    }
}