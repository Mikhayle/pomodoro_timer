import React, { useCallback, useMemo } from "react";
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
    setTime
} from "store/timer";
import { useDispatch } from "react-redux";
import { stopTimer } from "utils/timer";

const ButtonSecondaryContainer =({ timerID, pauseTimerID, startTimer, currentTodo, timerStatus, timerMode, deletePomodoro }) => {
    const dispatch = useDispatch();
    const isDisabled = timerMode === MODE_READY;

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

        if (currentTodo.pomodoroCount % 3 === 0) {
            startTimer(15, 0)
        }

        if (currentTodo.pomodoroCount % 3 !== 0) {
            startTimer(5, 0)
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