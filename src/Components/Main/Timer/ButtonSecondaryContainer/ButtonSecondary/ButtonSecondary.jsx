import React from "react";
import styles from "./buttonSecondary.module.scss";

function ButtonSecondary({ children, onClick, isDisabled }) {

    return (
        <button
            className={styles.btnStop}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default ButtonSecondary;