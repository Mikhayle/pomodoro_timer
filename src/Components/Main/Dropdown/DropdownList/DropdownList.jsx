import React from "react";
import ReactDOM from "react-dom"
import styles from "./dropdownList.module.scss";
import { UpTime, Down, Edit, Remove } from "./DropdownItems";

function DropdownList( { top, left, onDelete, onUp, onDown, onEdit, onClick }) {
    const node = document.getElementById(`root`);

    return ReactDOM.createPortal((
        <ul className={styles.dropdownList} style={{top: top, left: left}}>
            <UpTime
                onClick={() => {
                    onUp();
                    onClick();
                }}
            />
            <Down
                onClick={() => {
                    onDown();
                    onClick();
                }}
            />
            <Edit
                onClick={() => {
                    onEdit();
                    onClick();
                }}
            />
            <Remove
                onClick={() => {
                    onDelete();
                    onClick();
                }}

            />
        </ul>
    ), node)
}

export default DropdownList;