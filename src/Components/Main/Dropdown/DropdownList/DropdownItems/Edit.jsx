import React from "react";
import styles from "./dropdownItem.module.scss";
import logo from "assets/img/edit.png";

const Edit = ({onClick}) => {
    return (
        <li className={styles.item} onClick={onClick}>
            <img className={styles.itemIcon} src={logo} alt=""/>
            <span className={styles.itemText}>
                Редактировать
            </span>
        </li>
    )
}

export default Edit;