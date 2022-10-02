import React from 'react';
import points from "../../../../assets/img/points.png";


const MenuButton = ({onClick}) => {
    return (
        <button
            onClick={onClick}
        >
            <img src={points} alt="меню"/>
        </button>
    )
}

export default MenuButton;
