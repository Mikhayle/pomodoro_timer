import {TODO_ADD, TODO_ADD_POMODORO, TODO_EDIT, TODO_REMOVE} from "./reducer.jsx";
import {TODO_COUNT_PAUSE, TODO_DECREMENT_POMODORO} from "./reducer";

export const todoAdd = (text) => {
    return {
        type: TODO_ADD,
        text,
    }
}

export const removeTodo = (id) => {
    return {
        type: TODO_REMOVE,
        id
    }
}

export const todoEdit = (id, text) => {
    return {
        type: TODO_EDIT,
        id,
        text,
    }
}

export const todoAddPomodoro = (id) => {
    return {
        type: TODO_ADD_POMODORO,
        id,
    }
}

export const todoDecrementPomodoro = (id) => {
    return {
        type: TODO_DECREMENT_POMODORO,
        id,
    }
}

export const todoIncrementPauseCount = (id) => {
    return {
        type: TODO_COUNT_PAUSE,
        id,
    }
}