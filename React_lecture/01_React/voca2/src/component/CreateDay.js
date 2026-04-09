import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    function addDay() {
        if (!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3001/days/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    day: days.length + 1,
                }),
            }).then(res => {
                if (res.ok) {
                    alert("생성이 완료되었습니다.");
                    setIsLoading(false);
                    navigate(`/`);
                }
            });
        }
    }

    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button style={{
                opacity: isLoading ? 0.3 : 1 
            }}
            onClick={addDay}>{isLoading ? "Saving..." : "Day 추가"}</button>
        </div>
    );
}