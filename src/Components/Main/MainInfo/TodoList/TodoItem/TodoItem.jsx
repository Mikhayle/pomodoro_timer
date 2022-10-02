import React from "react";
import styles from "./todoItem.module.scss";
import { Dropdown } from "Components";

function TodoItem({ number, item }) {

    return (
        <li
            data-number={number}
            className={styles.todoItem}
        >
            <span>
                {item.text}
            </span>
            <Dropdown
                item={item}
            />
        </li>
    )
}

export default TodoItem;