import React, {useCallback, useMemo} from "react";
import { ButtonSecondary } from "Components";
import {
    MODE_BREAK,
    MODE_READY,
    MODE_WORK,
    STATUS_ACTIVE,
    STATUS_PAUSED,
    STATUS_STOP,
    setMode,
    setStatus,
    setTime, setCompletedPomodoroCount
} from "store/timer";
import {useDispatch, useSelector} from "react-redux";
import { stopTimer } from "utils/timer";

const ButtonSecondaryContainer =({ timerID, pauseTimerID, startTimer, currentTodo, timerStatus, timerMode, deletePomodoro }) => {
    const dispatch = useDispatch();
    const isDisabled = timerMode === MODE_READY;
    const longBreak = useSelector(({ timer }) => timer.longBreak)
    const shortBreak = useSelector(({ timer }) => timer.shortBreak)
    const longBreakFrequency = useSelector(({ timer }) => timer.longBreakFrequency)
    const completedPomodoroCount = useSelector(({ timer }) => timer.completedPomodoroCount)


    const handleStopClick = useCallback(() => {
        stopTimer(timerID);
        stopTimer(pauseTimerID);
        dispatch(setTime(25, 0));
        dispatch(setStatus(STATUS_STOP));
        dispatch(setMode(MODE_READY));
    }, [dispatch, timerID]);

    const handleClickReady = useCallback(() => {
        stopTimer(timerID);
        stopTimer(pauseTimerID);
        deletePomodoro();
        console.log(completedPomodoroCount)
        dispatch(setCompletedPomodoroCount())
        console.log(completedPomodoroCount)

        if (completedPomodoroCount !== 0 && (completedPomodoroCount + 1) % longBreakFrequency === 0) {
            startTimer(longBreak, 0)
        } else {
            startTimer(shortBreak, 0)
        }

        dispatch(setMode(MODE_BREAK));
        dispatch(setStatus(STATUS_ACTIVE));
    }, [timerID, currentTodo, dispatch]);

    const handleSecondaryClick = () => {
        if (timerStatus === STATUS_PAUSED && timerMode === MODE_WORK) {
            handleClickReady();
        } else {
            handleStopClick();
        }
    }

    const btnSecondaryTitle = useMemo(() => {
        if (timerStatus === STATUS_PAUSED && timerMode === MODE_WORK) {
            return `Сделано`;
        }

        if (timerMode === MODE_BREAK) {
            return `Пропустить`;
        }

        return `Стоп`;
    }, [timerStatus, timerMode]);


    return (
        <ButtonSecondary
            children={btnSecondaryTitle}
            onClick={handleSecondaryClick}
            isDisabled={isDisabled}
        />
    )
}

export default ButtonSecondaryContainer;