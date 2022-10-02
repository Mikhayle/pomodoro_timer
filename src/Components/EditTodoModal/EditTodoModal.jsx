import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { ButtonSuccess } from "Components";
import styles from "./editTodoModal.module.scss";

const EditTodoModal = ({ onClick }) => {
    const node = document.getElementById(`root`);
    const [inputValue, setInputValue] = useState(``);

    const handleChange = useCallback((event) => {
        setInputValue(event.target.value);
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onClick(inputValue);
    }, [inputValue, onClick]);

    return ReactDOM.createPortal((
        <div className={styles.container}>
            <div className={styles.modal}>
                <form
                    className={styles.modalForm}
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        className={styles.input}
                        onChange={handleChange}
                        value={inputValue}
                    />
                    <ButtonSuccess
                        children={`Сохранить`}
                        type={`submit`}
                    />
                </form>
            </div>
        </div>
    ), node)
}

export default EditTodoModal;