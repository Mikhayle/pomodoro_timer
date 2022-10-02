import React from "react";
import styles from "./layout.module.scss";


function Layout({ children, newClass }) {
    return (
        <div className={`${styles.container} ${newClass}`}>
            { children }
        </div>
    )
}

export default Layout;