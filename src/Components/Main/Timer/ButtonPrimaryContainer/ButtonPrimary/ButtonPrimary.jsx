import React from "react";
import styles from "./buttonPrimary.module.scss";

function ButtonPrimary({ children, onClick }) {
    return (
        <button
            className={styles.btnSuccess}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ButtonPrimary;
