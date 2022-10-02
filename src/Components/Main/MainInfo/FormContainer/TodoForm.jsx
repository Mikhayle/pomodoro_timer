import React from "react";
import styles from "./formContainer.module.scss";
import ButtonSuccess from "../../../ButtonSuccess/ButtonSuccess";

const TodoForm = (onChange, onSubmit, value) => {
    return (
        <form
            className={styles.todoForm}
            onSubmit={onSubmit}
        >
            <input
                type="text"
                className={styles.todoInput}
                placeholder={"Название задачи"}
                onChange={onChange}
                value={value}
            />
            <ButtonSuccess children={"Добавить"} />
        </form>
    )
}

export default TodoForm;