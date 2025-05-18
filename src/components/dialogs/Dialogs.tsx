import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

export const Dialogs = () => {

    const dialogData = [
        {id: 1, name: "Maksim"},
        {id: 2, name: "Larisa"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Bogdan"}
    ]

    const messageData = [
        {id: 1, message: 'Я горжусь вами, мои дорогие, всегда будьте счастливы и заботьтесь друг о друге.'},
        {id: 2, message: 'Дорогая, ты моя опора и вдохновение, с тобой каждый день наполнен любовью и счастьем.'},
        {id: 3, message: 'Сынок, ты наш лидер и пример для всех, гордимся твоими успехами и верим в тебя.'},
        {id: 4, message: 'Сынок, ты наше солнышко, радуешь нас каждый день своей улыбкой и добротой.'}
    ]

    return (
        <div className={styles.contentDialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.item}>
                    {dialogData.map(d => {
                        return <DialogItem id={d.id} name={d.name}/>
                    })}
                </div>
            </div>


            <div className={styles.messagesItem}>
                <div className={styles.messages}>
                    {messageData.map(m => {
                        return <Message id={m.id} message={m.message}/>
                    })}
                </div>
            </div>
        </div>
    );
};