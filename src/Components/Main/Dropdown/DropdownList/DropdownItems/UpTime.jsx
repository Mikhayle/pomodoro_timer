import React, {useCallback} from "react";
import styles from "./dropdownItem.module.scss";
import logo from "assets/img/up.png";

const UpTime = ({onClick}) => {
    const handleClick = useCallback(() => {
        onClick();
    }, [onClick]);

    return (
        <li className={styles.item} onClick={handleClick}>
            <img className={styles.itemIcon} src={logo} alt=""/>
            <span className={styles.itemText}>
                Увеличить
            </span>
        </li>
    )
}

export default UpTime;