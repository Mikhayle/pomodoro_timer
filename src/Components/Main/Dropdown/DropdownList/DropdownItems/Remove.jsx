import React, {useCallback} from "react";
import styles from "./dropdownItem.module.scss";
import logo from "assets/img/delete.png";

const Remove = ({ onClick }) => {

    const handleClick = useCallback(() => {
        onClick();
    }, [onClick])

    return (
        <li className={styles.item} onClick={handleClick}>
            <img className={styles.itemIcon} src={logo} alt=""/>
            <span className={styles.itemText}>
                Удалить
            </span>
        </li>
    )
}

export default Remove;