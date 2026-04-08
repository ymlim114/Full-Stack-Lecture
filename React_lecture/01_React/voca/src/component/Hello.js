// import World from "./World";
// import styles from "./Hello.module.css";
import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {

    // function showName() {
    //     console.log("Lim");
    // }

    // function showAge(age) {
    //     console.log(age);
    // }

    // console.log(props);
    // let name = 'Lim';
    const [name, setName] = useState('Lim');
    // const [age, setAge] = useState(age);
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";


    // function changeName() {
    //     console.log(name);
    //     // document.getElementById('name').innerText = name;
    //     setName(name == 'Lim' ? 'Kim' : 'Lim');
    // }

    return (
        <div>
            {/* <h1 style={{
                color: '#f00',
                borderRight: '2px solid #000',
                marginBottom: '30px',
                opacity: 0.5,
            }}
            >Hello</h1>
            <div className={styles.box}>Hello</div>
            <World />
            <p>Event 처리</p>
            <button onClick={showName}>Show name</button>
            <button onClick={() => {
                showAge(30);
            }}
            >Show age</button>
            <input type="text" onChange={e => {
                console.log(e.target.value);
            }} /> */}
            {/* <h1>State 처리</h1> */}
            <h2 id="name">{name}({age}세) : {msg}</h2>
            <UserName name={name} />
            {/* <button onClick={changeName}>Change</button> */}
            <button onClick={() => {
                setName(name === 'Lim' ? 'Kim' : 'Lim');
                // setAge(age + 1);
            }}
            >Change</button>
        </div>
    );
}