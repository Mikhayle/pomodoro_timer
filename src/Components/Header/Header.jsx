import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "assets/img/tomato_logo.png"
import { Layout } from "Components";

function Header() {
    return (
     <header className={styles.header}>
         <Layout newClass={styles.header__container}>
             <Link to="/">
                 <div className={styles.logo_container}>
                     <img src={logo} className={styles.logo} alt="pomodoro"/>
                     <span className={styles.logo_text}>
                     pomodoro_box
                 </span>
                 </div>
             </Link>
             <Link to="/stats" className={styles.stats_wrapper}>
             <span className={styles.stats}>
                 Статистика
             </span>
             </Link>
         </Layout>
     </header>
    )
}

export default Header;
