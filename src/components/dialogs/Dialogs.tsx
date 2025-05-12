import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={styles.contentDialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.item}>
                  <NavLink to="/dialogs/1">Maksim</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/dialogs/2">Larisa</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/dialogs/3">Andrey</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/dialogs/4">Bogdan</NavLink>
                </div>
            </div>


            <div className={styles.messagesItem}>
                <div className={styles.messages}>
                    Я горжусь вами, мои дорогие, всегда будьте счастливы и заботьтесь друг о друге.
                </div>
                <div className={styles.messages}>
                    Дорогая, ты моя опора и вдохновение, с тобой каждый день наполнен любовью и счастьем.
                </div>
                <div className={styles.messages}>
                    Сынок, ты наш лидер и пример для всех, гордимся твоими успехами и верим в тебя.
                </div>
                <div className={styles.messages}>
                    Сынок, ты наше солнышко, радуешь нас каждый день своей улыбкой и добротой.
                </div>
            </div>
        </div>
    );
};