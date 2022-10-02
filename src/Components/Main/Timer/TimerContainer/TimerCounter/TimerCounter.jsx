import React from "react";
import styles from "./timerCounter.module.scss";

const TimerCounter = ({minutes, seconds}) => {


    return (
        <div className={styles.timerCounter}>
            <div className={styles.minutes}>
                {minutes > 9 ? minutes : `0${minutes}`}
            </div>
            <span>
                :
            </span>
            <div className={styles.seconds}>
                {seconds > 9 ? seconds : `0${seconds}`}
            </div>
        </div>
    )
}

export default TimerCounter;