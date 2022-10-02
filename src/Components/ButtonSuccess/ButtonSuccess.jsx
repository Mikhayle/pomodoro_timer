import React from "react";
import styles from "./buttonSuccess.module.scss";

const ButtonSuccess = ({ children, type }) => {
    return (
        <button className={styles.btnSuccess} type={type}>
            {children}
        </button>
    );
}

export default ButtonSuccess;