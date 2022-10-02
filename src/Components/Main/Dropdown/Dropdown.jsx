import React, { useCallback, useRef, useState } from "react";
import { DropdownList } from "./DropdownList";
import {
    removeTodo,
    todoAddPomodoro,
    todoDecrementPomodoro,
    todoEdit
} from "store/todos/action";
import { useDispatch, useSelector } from "react-redux";
import { MenuButton } from "./MenuButton";
import { EditTodoModal } from "Components/EditTodoModal";
import  { setMode, setStatus, setTime } from "store/timer/action";
import { MODE_READY, STATUS_STOP } from "store/timer/reducer";
import { stopTimer } from "utils/timer";

function Dropdown({item}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    const ref = useRef(null);
    const dispatch = useDispatch();
    const id = item.id;
    const timerId = useSelector(state => state.timer.id);
    const todoList = useSelector(state => state.todos);

    const handleOpen = useCallback(() => {
        const coordsElem = ref.current.getBoundingClientRect();
        const offsetY = window.pageYOffset;
        setIsDropdownOpen(prevState => !prevState);
        setCoords({
            x: coordsElem.left + coordsElem.width,
            y: coordsElem.bottom + offsetY
        })
    }, [])

    const handleClickUp = () => {
        dispatch(todoAddPomodoro(id));
    }

    const handleClickDown = () => {
        dispatch(todoDecrementPomodoro(id));
    }

    const handleClickEdit = () => {
        setIsModalOpen(prevState => !prevState);
    };

    const handleClickSaveBtn = (text) => {
        dispatch(todoEdit(id, text));
        setIsModalOpen(prevState => !prevState);
    }

    const handleRemoveTodoItem = () => {
        dispatch(removeTodo(id));
       if (todoList[0].id === id) {
           stopTimer(timerId);
           dispatch(setTime(25, 0))
           dispatch(setStatus(STATUS_STOP));
           dispatch(setMode(MODE_READY));
       }
    }
    
    return (
        <div ref={ref}>
            <MenuButton
                onClick={handleOpen}
            />
            {isDropdownOpen && (
                <DropdownList
                    top={coords.y}
                    left={coords.x}
                    onUp={handleClickUp}
                    onDown={handleClickDown}
                    onEdit={handleClickEdit}
                    onDelete={() => handleRemoveTodoItem()}
                    onClick={handleOpen}
                />
            )}
            {isModalOpen && (
                <EditTodoModal
                    onClick={handleClickSaveBtn}
                />
            )}
        </div>
    )
}

export default Dropdown;