import React, { useEffect, useState } from "react";
import styles from "./main.module.scss"
import { Layout, Timer, MainInfo } from "Components";
import { useSelector } from "react-redux";

function Main() {
    const [isAnyTodo, setIsAnyTodo] = useState(false);
    const todoList = useSelector(state => state.todos);

    useEffect(() => {
        if (todoList.length > 0) setIsAnyTodo(true);
        if (todoList.length === 0) setIsAnyTodo(false);
    }, [todoList]);

    return (
        <Layout newClass={styles.mainContainer}>
            <MainInfo />
            {isAnyTodo && <Timer />}
        </Layout>
    )
}

export default Main;