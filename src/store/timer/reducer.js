export const TIMER_SET_START = `TIMER_SET_START`;
export const TIMER_SET_STATUS = `TIMER_SET_STATUS`;
export const TIMER_SET_MODE = `TIMER_SET_MODE`;
export const MODE_BREAK = `BREAK`;
export const MODE_WORK = `WORK`;
export const MODE_READY = `READY`;
export const STATUS_STOP = `STOP`;
export const STATUS_ACTIVE = `ACTIVE`;
export const STATUS_PAUSED = `PAUSED`;
export const TIMER_SET_ID = `TIMER_SET_ID`;
export const TIMER_SET_PAUSE_ID = `TIMER_SET_PAUSE_ID`;
export const TIMER_INCREMENT_FULL_TIME = `TIMER_INCREMENT_FULL_TIME`;
export const TIMER_INCREMENT_PAUSE_TIME = `TIMER_INCREMENT_PAUSE_TIME`;
export const TIMER_INCREMENT_COMPLETED_POMODORO = `TIMER_INCREMENT_COMPLETED_POMODORO`;


export const timerReducer = (state, action) => {
    switch (action.type) {
        case TIMER_SET_START:
            return {
                ...state,
                remainingTime: {
                    minutes: action.minutes,
                    seconds: action.seconds
                }
            }

        case TIMER_SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case TIMER_SET_MODE:
            return {
                ...state,
                mode: action.mode
            }

        case TIMER_SET_ID:
            return {
                ...state,
                id: action.id
            }

        case TIMER_SET_PAUSE_ID:
        return {
            ...state,
            onPauseId: action.id
        }

        case TIMER_INCREMENT_FULL_TIME:
           const newState = {...state};
           newState.fullTime++;
           return newState;

        case TIMER_INCREMENT_PAUSE_TIME:
            const reState = {...state};
            reState.pauseTime++;
            return reState;

        case TIMER_INCREMENT_COMPLETED_POMODORO:
            return { ...state, completedPomodoroCount: state.completedPomodoroCount + 1}

        default:
            return {
                ...state
            }
    }
}
