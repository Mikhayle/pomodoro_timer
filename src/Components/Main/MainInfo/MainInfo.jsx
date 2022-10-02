import React from "react";
import styles from "./mainInfo.module.scss";
import { FormContainer, TodoList } from "Components";

function MainInfo() {
    return (
        <div className={styles.info}>
            <h1 className={styles.title}>
                Ура! Теперь можно начать работать:
            </h1>
            <ul className={styles.infoList}>
                <li className={styles.infoListItem}>
                    <span>Выберите категорию и напишите название текущей задачи</span>
                </li>
                <li className={styles.infoListItem}>
                    <span>Запустите таймер («помидор»)</span>
                </li>
                <li className={styles.infoListItem}>
                   <span> Работайте пока «помидор» не прозвонит</span>
                </li>
                <li className={styles.infoListItem}>
                    <span>Сделайте короткий перерыв (3-5 минут)</span>
                </li>
                <li className={styles.infoListItem}>
                    <span>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).</span>
                </li>
            </ul>
            <FormContainer />
            <TodoList />
        </div>
    )
}

export default MainInfo