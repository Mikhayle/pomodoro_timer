import React from "react";
import styles from "./buttonAdd.module.scss";
import plus from "assets/img/plus.svg"

function ButtonAdd({ onClick }) {
  return (
      <button
          className={styles.buttonAdd}
          onClick={onClick}
      >
          <img className={styles.plus} src={plus} alt="Добавить"/>
      </button>
  )
}

export default ButtonAdd;