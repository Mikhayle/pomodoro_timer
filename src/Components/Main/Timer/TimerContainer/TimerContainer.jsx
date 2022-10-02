import React, { useCallback, useEffect } from "react";
import styles from "./timerContainer.module.scss";
import { TimerCounter } from "./TimerCounter";
import { useDispatch, useSelector } from "react-redux";
import {
    setFullTime,
    setMode,
    setStatus,
    setTime, setTimeOnPause,
    setTimerId,
    MODE_BREAK, MODE_READY,
    MODE_WORK,
    STATUS_ACTIVE, STATUS_PAUSED,
    STATUS_STOP
} from "store/timer";
import { soundSignal, stopTimer } from "utils/timer.js";
import { ButtonPrimaryContainer, ButtonSecondaryContainer, ButtonAdd } from "Components";
import {
    removeTodo,
    todoAddPomodoro,
    todoDecrementPomodoro,
    todoIncrementPauseCount
} from "store/todos";
import { TIMER_DECREMENT_INTERVAL } from "constants/timer";

const TimerContainer = ({todos}) => {
    const currentTodo = todos[0];
    const todoTitle = currentTodo === undefined ? `` : currentTodo.text;
    const dispatch = useDispatch();
    const remainingMinutes = useSelector(state => state.timer.remainingTime.minutes);
    const remainingSeconds = useSelector(state => state.timer.remainingTime.seconds);
    const timerStatus = useSelector(state => state.timer.status);
    const timerMode = useSelector(state => state.timer.mode);
    const timerID = useSelector(state => state.timer.id);
    const pauseTimerID = useSelector(state => state.timer.onPauseId);

    const deletePomodoro = () => {
        // отнимаем одну помидорку
        dispatch(todoDecrementPomodoro(currentTodo.id));
        if (currentTodo.pomodoroCount < 1) dispatch(removeTodo(currentTodo.id));
    }

    // Запуск таймера
    const startTimer = (timeInMinutes, timeInSeconds) => {
        let fullTimePerMilliseconds = (timeInMinutes * 60 * 1000) + (timeInSeconds * 1000);
        let minutes;
        let seconds;

        // Обновление времени таймера при обратном отсчете
        const updateTime = () => {
            fullTimePerMilliseconds -= TIMER_DECREMENT_INTERVAL;
            minutes = Math.floor(fullTimePerMilliseconds / 1000 / 60) % 60;
            seconds= Math.floor(fullTimePerMilliseconds / 1000) % 60;

            dispatch(setTime(minutes, seconds));

            // если время таймера заканчивается
            if (fullTimePerMilliseconds <= 0) {
                soundSignal();
                clearInterval(id); // сбрасываем таймер
                deletePomodoro();
                if (currentTodo.pomodoroCount > 0) dispatch(setMode(MODE_BREAK));

                // Если таймер в режиме перерыва, запуск режима "готов"
                if (timerMode === MODE_BREAK) {
                    dispatch(setTime(25, 0))
                    dispatch(setMode(MODE_READY)); // переключаем режим таймера в "перерыв"
                    dispatch(setStatus(STATUS_STOP)); // переключаем статус таймера в "активный"
                }
            }
        }

        const id = setInterval(updateTime, TIMER_DECREMENT_INTERVAL); // запуск таймера
        dispatch(setTimerId(id)) // фиксируем id таймера, чтобы можно было из любого места его остановить.
    }

    const handleClickAddPomodor = useCallback(() => {
        dispatch(todoAddPomodoro(currentTodo.id))
    }, [dispatch, currentTodo]);

    useEffect(() => {
        let pauseTimeCounter;
        if (timerMode === MODE_WORK && timerStatus === STATUS_PAUSED) {
            dispatch(todoIncrementPauseCount(currentTodo.id));
            pauseTimeCounter = setInterval(() => {
                dispatch(setTimeOnPause());
            }, TIMER_DECREMENT_INTERVAL)
        }

        return () => {
            clearInterval(pauseTimeCounter);
        }
    }, [timerMode, timerStatus, dispatch]);

    useEffect(() => {
        let workTimeCounter;
        if (timerMode === MODE_WORK && timerStatus === STATUS_ACTIVE) {
            workTimeCounter = setInterval(() => {
                dispatch(setFullTime())
            }, TIMER_DECREMENT_INTERVAL)
        }

        return () => {
            clearInterval(workTimeCounter);
        }
    }, [timerMode, timerStatus, dispatch]);

    useEffect(() => {
        if(todos.length === 0) {
            stopTimer(timerID);
            stopTimer(pauseTimerID)
        }
    }, [todos.length, timerID, pauseTimerID]);

    return (
        <div className={styles.timerBody}>
            <div className={styles.timerWrapper}>
                <div className={styles.timer}>
                    <TimerCounter
                        minutes={remainingMinutes}
                        seconds={remainingSeconds}
                    />
                    <ButtonAdd
                        onClick={handleClickAddPomodor}
                    />
                </div>
            </div>
            <div className={styles.timerSubtitle}>
                {`Текущая задача - ${todoTitle}`}
            </div>
            <div className={styles.btnsWrapper}>
                <ButtonPrimaryContainer
                    startTimer={startTimer}
                    timerStatus={timerStatus}
                    timerMode={timerMode}
                    timerID={timerID}
                    pauseTimerID={pauseTimerID}
                    remainingMinutes={remainingMinutes}
                    remainingSeconds={remainingSeconds}
                    currentTodo={currentTodo}
                />
                <ButtonSecondaryContainer
                    startTimer={startTimer}
                    timerStatus={timerStatus}
                    timerMode={timerMode}
                    timerID={timerID}
                    pauseTimerID={pauseTimerID}
                    currentTodo={currentTodo}
                    deletePomodoro={deletePomodoro}
                />
            </div>
        </div>
    )
}

export default TimerContainer;