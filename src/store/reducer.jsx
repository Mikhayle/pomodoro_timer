import {
    TODO_ADD,
    TODO_ADD_POMODORO,
    TODO_COUNT_PAUSE,
    TODO_DECREMENT_POMODORO,
    TODO_EDIT,
    TODO_REMOVE,
    todosReducer
} from "./todos";
import {
    TIMER_INCREMENT_COMPLETED_POMODORO,
    TIMER_INCREMENT_FULL_TIME, TIMER_INCREMENT_PAUSE_TIME,
    TIMER_SET_ID,
    TIMER_SET_MODE, TIMER_SET_PAUSE_ID,
    TIMER_SET_START,
    TIMER_SET_STATUS,
    timerReducer
} from "./timer";

const initialState = {
    todos: [],
    timer: {
        id: ``,
        onPauseId: ``,
        remainingTime: {
            minutes: 25,
            seconds: 0,
        },
        status: `STOP`,
        mode: `READY`,
        fullTime: 0,
        pauseTime: 0,
        shortBreak: 5,
        longBreak: 15,
        longBreakFrequency: 4,
        pomodoroDuration: 25,
        completedPomodoroCount: 0,
        isNotification: true
    }
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD:
        case TODO_EDIT:
        case TODO_REMOVE:
        case TODO_ADD_POMODORO:
        case TODO_DECREMENT_POMODORO:
        case TODO_COUNT_PAUSE:
            return {
                ...state,
                todos: todosReducer(state.todos, action)

            }

        case TIMER_SET_START:
        case TIMER_SET_STATUS:
        case TIMER_SET_MODE:
        case TIMER_SET_ID:
        case TIMER_INCREMENT_FULL_TIME:
        case TIMER_SET_PAUSE_ID:
        case TIMER_INCREMENT_PAUSE_TIME:
        case TIMER_INCREMENT_COMPLETED_POMODORO:
            return {
                ...state,
                timer: timerReducer(state.timer, action)
            }


        default:
            return state;
    }
}