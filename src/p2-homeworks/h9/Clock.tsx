import React, { useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clocks.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);
    

    const stop = () => {
        window.clearInterval(timerId);
    };
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(id);
        
    };

    const onMouseEnter = () => {
        setShow(true);
    };
    const onMouseLeave = () => {
        setShow(false);
    };

    const stringTime = date.toLocaleTimeString(); // fix with date
    const stringDate = date.toLocaleDateString(); // fix with date

    return (
        <div className={s.clock}>
            <div className={s.time} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                Time: {stringTime}
            </div>

            {show && <div className={s.date}>Date: {stringDate}</div>}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>
    );
}

export default Clock;
