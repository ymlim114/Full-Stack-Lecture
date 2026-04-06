export {};

class Person{
    name: string;
    constructor(name:string){
        this.name = name
    }
    greet(){
        console.log(`Hello, ${this.name}`);
    }
}

class User{

    // id: number;
    // nickname: string;

    constructor(public id:number, protected birthData: string, private nickname:string){
        this.id = id;
        this.birthData = birthData;
        this.nickname = nickname;
    }

    intro() {
        return `${this.id} - ${this.birthData} - ${this.nickname}`;
    }
}
const user1 = new User(1, '1970', '홍길동');
console.log(user1.id);
console.log(user1.intro());

class Admin extends User {

    constructor(id:number, birthData:string, nickname:string){
        super(id,birthData,nickname);
    }

    showId() {
        return this.id;
    }

    showBirthData() {
        return this.birthData;
    }

    showNickname() {
        // return this.nickname;
    }
}
const admin = new Admin(2, '1971', 'admin');
console.log(admin.showId());
console.log(admin.showBirthData());
// console.log(admin.showNickname());