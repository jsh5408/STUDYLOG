import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [total, setTotal] = useState(0);
    const [times, setTimes] = useState([]);

    function onHourChange(event) {
        setHour(event.target.value);
    }

    function onMinuteChange(event) {
        setMinute(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        let tmp = Number(hour) * 60 + Number(minute);
        setTotal((current) => tmp+current);
        console.log("total time is " + tmp + " 분");
        setTimes((current) => [...current, tmp]);
    }

    function onReset() {
        setHour(0);
        setMinute(0);
        //setTotal(0);
    }

    return (
        <div>
            <h1>Home</h1>
            <div>
                <h3>시간 계산</h3>
                <form onSubmit={onSubmit} onReset={onReset}>
                    <input type="number" id="hour" className={styles.number} value={hour} onChange={onHourChange} min="0"/>
                    시간
                    <input type="number" id="minute" className={styles.number} value={minute} onChange={onMinuteChange} min="0" max="59"/>
                    분
                    <button type="reset">초기화</button>
                    <button type="submit">확인</button>
                </form>
                <p>
                {total? "총 " + parseInt(total/60) + "시간 " + total%60 + "분":""}</p>
                {
                    times.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;