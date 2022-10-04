import {
    TIMER_INCREMENT_COMPLETED_POMODORO,
    TIMER_INCREMENT_FULL_TIME, TIMER_INCREMENT_PAUSE_TIME,
    TIMER_SET_ID,
    TIMER_SET_MODE,
    TIMER_SET_PAUSE_ID,
    TIMER_SET_START,
    TIMER_SET_STATUS
} from "./reducer";

export const setTime = (minutes, seconds) => {
    return {
        type: TIMER_SET_START,
        minutes,
        seconds,
    }
}

export const setStatus = (status) => {
    return {
        type: TIMER_SET_STATUS,
        status,
    }
}

export const setTimerId = (id) => {
    return {
        type: TIMER_SET_ID,
        id,
    }
}

export const setTimerIdOnPause = (id) => {
    return {
        type: TIMER_SET_PAUSE_ID,
        id,
    }
}

export const setMode = (mode) => {
    return {
        type: TIMER_SET_MODE,
        mode,
    }
}

export const setFullTime = () => {
    return {
        type: TIMER_INCREMENT_FULL_TIME,
    }
}

export const setTimeOnPause = () => {
    return {
        type: TIMER_INCREMENT_PAUSE_TIME,
    }
}

export const setCompletedPomodoroCount = () => {
    return {
        type: TIMER_INCREMENT_COMPLETED_POMODORO,
    }
}