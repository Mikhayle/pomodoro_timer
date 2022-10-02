import React, { useMemo } from "react";
import styles from "./timerHeader.module.scss";
import { useSelector } from "react-redux";
import { MODE_BREAK, MODE_READY, MODE_WORK } from "store/timer";

const TimerHeader = ({ todos }) => {
    const currentTodo = todos[0];
    const todoTitle = currentTodo === undefined ? `` : currentTodo.text;
    const pomodoroCount = currentTodo === undefined ? `1` : currentTodo.pomodoroCount;
    const pauseCount = currentTodo === undefined ? `` : currentTodo.pauseCount;
    const showPauseCount = Array(pauseCount).fill(`'`).join(` `);
    const timerMode = useSelector(state => state.timer.mode);

    const theme = useMemo(() => {
        if (timerMode === MODE_READY) {
            return styles.timerHeaderReady
        }

        if (timerMode === MODE_WORK) {
            return styles.timerHeaderWork
        }

        if (timerMode === MODE_BREAK) {
            return styles.timerHeaderBreak
        }

    }, [timerMode])


    return (
        <div className={theme}>
            <div className={styles.todoItemName}>
                {todoTitle}
            </div>
            <div className={styles.todoItemNumber}>
                {`Помидор ${pomodoroCount} ${showPauseCount}`}
            </div>
        </div>
    )
}

export default TimerHeader;