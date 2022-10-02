import React, { useCallback, useMemo } from 'react';
import { ButtonPrimary } from "Components";
import { MODE_READY, MODE_WORK, STATUS_ACTIVE, STATUS_PAUSED, STATUS_STOP, setMode, setStatus } from "store/timer";
import { useDispatch } from "react-redux";
import { stopTimer } from "utils/timer";
import { TIMER_MINUTES_START, TIMER_SECONDS_START } from "constants/timer";

const ButtonPrimaryContainer = ({ startTimer, timerStatus, timerMode, timerID, pauseTimerID, remainingSeconds, remainingMinutes}) => {
    const dispatch = useDispatch();

    const handleStartClick = useCallback(() => {
        startTimer(TIMER_MINUTES_START, TIMER_SECONDS_START);
        dispatch(setStatus(STATUS_ACTIVE));
        dispatch(setMode(MODE_WORK));
    }, [timerID]);

    const handlePauseClick = useCallback(() => {
        stopTimer(timerID);
        dispatch(setStatus(STATUS_PAUSED));
    }, [timerID, dispatch]);

    const handleClickContinue = useCallback(() => {
        stopTimer(pauseTimerID)
        startTimer(remainingMinutes, remainingSeconds);
        dispatch(setStatus(STATUS_ACTIVE));
    }, [remainingMinutes, remainingSeconds, pauseTimerID]);

    const handlePrimaryClick = () => {
        if (timerStatus === STATUS_STOP) {
            handleStartClick();
        }

        if (timerStatus === STATUS_ACTIVE) {
            handlePauseClick();
        }

        if (timerStatus === STATUS_PAUSED) {
            handleClickContinue();
        }
    }

    const btnPrimaryTitle = useMemo(() => {
        if (timerStatus === STATUS_STOP && timerMode === MODE_READY) {
            return `Старт`;
        }

        if (timerStatus === STATUS_ACTIVE) {
            return `Пауза`;
        }

        if (timerStatus === STATUS_PAUSED) {
            return `Продолжить`;
        }
    }, [timerStatus,timerMode]);

    return (
        <ButtonPrimary
            children={btnPrimaryTitle}
            onClick={handlePrimaryClick}
        />
    )
}

export default ButtonPrimaryContainer;