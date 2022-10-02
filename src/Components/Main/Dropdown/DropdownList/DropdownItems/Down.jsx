import React from "react";
import styles from "./dropdownItem.module.scss";
import logo from "assets/img/down.png";

const DownTime = ({onClick}) => {
    return (
        <li className={styles.item} onClick={onClick}>
            <img className={styles.itemIcon} src={logo} alt="Уменьшить"/>
            <span className={styles.itemText}>
                Уменьшить
            </span>
        </li>
    )
}

export default DownTime;