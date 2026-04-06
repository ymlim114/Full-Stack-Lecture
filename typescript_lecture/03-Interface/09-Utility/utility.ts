type User = {
    id: number;
    name: string;
    email?: string;
}

type User2 = {
    id: number;
    name: string;
    email?: string;
    role:'admin' | 'member';    // Literal type
}

/*
const user1: User = {id:1, name:'홍길동'}
const user2: User = {id:1, name:'홍길동', email:'abc@abc.com'}
const user3: User = {name:'홍길동', email:'abc@abc.com'} // 오류남
*/

type UserDraft1 = Partial<User>; // User 타입의 모든 속성을 선택 변경
const user1:UserDraft1 = {name:'홍길동'}
user1.name = '이도령';

type UserDraft2 = Required<User>; // User 타입의 모든 속성을 필수 변경
// const user2: UserDraft2 = {id:1, name:'홍길동'} // 오류남, email이 필수로 변경됨
const user2: UserDraft2 = {id:1, name:'홍길동', email:'abc@abc.com'} // 오류남, email이 필수로 변경됨

type UserDraft3 = Readonly<User>; // User 타입의 모든 속성을 읽기 전용 변경
const user3: UserDraft3 = {id:3, name:'이도령'}
// user3.id = 2; // 오류남, id가 읽기 전용으로 변경됨(업데이트 불가)
// user3.name = '성춘향'; // 오류남, name이 읽기 전용으로 변경됨(업데이트 불가)

type UserDraft4 = Pick<User, 'id' | 'name'>; // User 타입의 id와 name 속성만 선택
// const user4: UserDraft4 = {id:4, name:'이순신', email:'abc'} // 오류남, email 속성이 없음
const user4: UserDraft4 = {id:4, name:'이순신'}

type UserDraft5 = Omit<User, 'email'>; // User 타입의 email 속성을 제외한 나머지 속성 선택
// const user5: UserDraft5 = {id:4, name:'이순신', email:'abc'} // 오류남, email 속성이 없음

type publicProfile = Pick<User2, 'id' | 'name'>; // User2 타입에서 id와 name 속성만 선택
const p:publicProfile = {id:10, name:'kim'};

// 인덱스 접근 타입명['key']
type UserIdType = User['id']; // number
type UserRoleType = User2['role']; // admin, member

type Role = User2['role'];   // Role 타입에는 admin 또는, member 값만 가능
type UserByRole = Record<Role, publicProfile[]>; // key(속성) value(값)
/*
type UserByRole = {
    admin: publicProfile[];
    member: publicProfile[];
}
*/

const group:UserByRole = {
    admin:[
        {id:1, name:'관리자1'},
        {id:2, name:'관리자2'},
        {id:3, name:'관리자3'}
    ], 
    member:[
        {id:4, name:'회원1'},
        {id:5, name:'회원2'},
        {id:6, name:'회원3' }
    ]
}

// Exclude, Extract 유니언 필터링
type Status = 'idle' | 'loading' | 'success' | 'error';
type NoneLoading = Exclude<Status, 'loading'>; // 'idle' | 'success' | 'error';
type NonIdleStatus = Extract<Status, 'success' | 'error'>; // 'success' | 'error'

// type UserKeys = 'id' | 'name' | 'email' | 'role'; // User2 타입의 키(속성) 들
type UserKeys = keyof User2; // 'id' | 'name' | 'email' | 'role'