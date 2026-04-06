var user1 = { name: '홍길동' };
user1.name = '이도령';
// const user2: UserDraft2 = {id:1, name:'홍길동'} // 오류남, email이 필수로 변경됨
var user2 = { id: 1, name: '홍길동', email: 'abc@abc.com' }; // 오류남, email이 필수로 변경됨
var user3 = { id: 3, name: '이도령' };
// const user4: UserDraft4 = {id:4, name:'이순신', email:'abc'} // 오류남, email 속성이 없음
var user4 = { id: 4, name: '이순신' };
var p = { id: 10, name: 'kim' };
/*
type UserByRole = {
    admin: publicProfile[];
    member: publicProfile[];
}
*/
var group = {
    admin: [
        { id: 1, name: '관리자1' },
        { id: 2, name: '관리자2' },
        { id: 3, name: '관리자3' }
    ],
    member: [
        { id: 4, name: '회원1' },
        { id: 5, name: '회원2' },
        { id: 6, name: '회원3' }
    ]
};
