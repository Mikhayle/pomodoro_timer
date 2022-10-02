import React from "react";
import styles from "./timer.module.scss";
import { TimerHeader, TimerContainer } from "Components";
import { useSelector } from "react-redux";

function Timer() {
    const todos = useSelector(state => state.todos)

    return (
        <div className={styles.timerBlock}>
           <TimerHeader
            todos={todos}
           />
           <TimerContainer
               todos={todos}
           />
        </div>
    )
}

export default Timer;