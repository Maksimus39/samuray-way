import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

export const Dialogs = () => {
    return (
        <div className={styles.contentDialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.item}>
                    <DialogItem id={1} name={"Maksim"}/>
                    <DialogItem id={2} name={"Larisa"}/>
                    <DialogItem id={3} name={"Andrey"}/>
                    <DialogItem id={4} name={"Bogdan"}/>
                </div>
            </div>


            <div className={styles.messagesItem}>
                <div className={styles.messages}>
                    <Message message={'Я горжусь вами, мои дорогие, всегда будьте счастливы и заботьтесь друг о друге.'}/>
                    <Message message={' Дорогая, ты моя опора и вдохновение, с тобой каждый день наполнен любовью и счастьем.'}/>
                    <Message message={' Сынок, ты наш лидер и пример для всех, гордимся твоими успехами и верим в тебя.'}/>
                    <Message message={' Сынок, ты наше солнышко, радуешь нас каждый день своей улыбкой и добротой.'}/>
                </div>
            </div>
        </div>
    );
};