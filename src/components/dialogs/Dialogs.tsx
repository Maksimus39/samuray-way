import React from 'react';
import styles from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={styles.contentDialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.item}>
                    Maksim
                </div>
                <div className={styles.item}>
                    Larisa
                </div>
                <div className={styles.item}>
                    Andrey
                </div>
                <div className={styles.item}>
                    Bogdan
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