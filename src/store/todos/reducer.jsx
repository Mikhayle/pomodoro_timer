import {v4 as uuid} from "uuid";
import {act} from "@testing-library/react";

export const TODO_ADD = `TODO_ADD`;
export const TODO_REMOVE = `TODO_REMOVE`;
export const TODO_EDIT = `TODO_EDIT`;
export const TODO_ADD_POMODORO = `TODO_ADD_POMODORO`;
export const TODO_DECREMENT_POMODORO = `TODO_DECREMENT_POMODORO`;
export const TODO_COUNT_PAUSE = `TODO_COUNT_PAUSE`;

export const todosReducer = (state, action) => {
    switch (action.type) {
        case TODO_ADD:
            return [
                {
                    id: uuid(),
                    text: action.text,
                    pomodoroCount: 1,
                    remainingMinutes: 25,
                    remainingSeconds: 0,
                    pauseCount: 0,
                },
                ...state,
            ];

        case TODO_REMOVE:
            return state.filter(item => {
                return item.id !== action.id
            });

        case TODO_EDIT:
            return [...state].map(item => {
                if (item.id === action.id) {
                    item.text = action.text
                }
                return item
            });

        case TODO_ADD_POMODORO:
            return [...state].map(item => {
                if (item.id === action.id) {
                    item.pomodoroCount++
                }
                return item;
            });

        case TODO_DECREMENT_POMODORO:
            return [...state].map(item => {
                if (item.id === action.id && item.pomodoroCount > 0) {
                    item.pomodoroCount = item.pomodoroCount - 1
                }
                return item;
            });

        case TODO_COUNT_PAUSE:
            return [...state].map(item => {
               if (item.id === action.id) {
                   item.pauseCount++
               }

               return item;
            });

        default: return state;
    }
}