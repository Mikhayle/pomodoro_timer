import React from "react";
import styles from "./todoList.module.scss";
import { TodoItem } from "Components";
import { useSelector } from "react-redux"


function TodoList() {
    const todoList = useSelector(state => state.todos);

    return (
        <ol className={styles.todoList}>
            {todoList.map((item, i) => (
                <TodoItem
                    key={item.id}
                    number={i + 1}
                    item={item}
                />
            ))}
        </ol>
    )
}

export default TodoList;