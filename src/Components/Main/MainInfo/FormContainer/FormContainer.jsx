import React from "react";
import styles from "./formContainer.module.scss";
import {todoAdd} from "../../../../store/todos/action";
import {useDispatch, useSelector} from "react-redux";
import {setMode, setStatus, setTime} from "../../../../store/timer/action";
import {MODE_READY, STATUS_STOP} from "../../../../store/timer/reducer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import ButtonSuccess from "../../../ButtonSuccess/ButtonSuccess";
import {stopTimer} from "../../../../utils/timer";

function FormContainer() {
    const dispatch = useDispatch();
    const timerId = useSelector(state => state.timer.id);

    const handleSubmit = (value) => {
        dispatch(todoAdd(value.todoName));
        stopTimer(timerId)
        dispatch(setMode(MODE_READY));
        dispatch(setStatus(STATUS_STOP));
        dispatch(setTime(25, 0));
        value.todoName = "";
    }

    return (
        <Formik
            initialValues={{
                todoName: "",
            }}
           validationSchema={Yup.object({
                todoName: Yup.string()
                    .max(30, "Введите не более 30 символов")
                    .min(3, "Введите не менее 3 символов")
                    .required("Поле обязательно для заполнения")
           })}
            onSubmit={handleSubmit}
        >
            {({errors, touched}) => (
                <Form className={styles.todoForm}>
                    <Field
                        type="text"
                        name="todoName"
                        placeholder={"Название задачи"}
                        className={styles.todoInput}
                    />
                    <div className={styles.error}>
                        <ErrorMessage name={"todoName"} />
                    </div>
                    <ButtonSuccess children={"Добавить"} />
                </Form>
            )}
        </Formik>
    )
}

export default FormContainer;