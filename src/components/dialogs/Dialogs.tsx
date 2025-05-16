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
                    <DialogItem id={dialogData[0].id} name={dialogData[0].name}/>
                    <DialogItem id={dialogData[1].id} name={dialogData[1].name}/>
                    <DialogItem id={dialogData[2].id} name={dialogData[2].name}/>
                    <DialogItem id={dialogData[3].id} name={dialogData[3].name}/>
                </div>
            </div>


            <div className={styles.messagesItem}>
                <div className={styles.messages}>
                    <Message message={messageData[0].message} id={messageData[0].id}/>
                    <Message message={messageData[1].message} id={messageData[1].id}/>
                    <Message message={messageData[2].message} id={messageData[2].id}/>
                    <Message message={messageData[3].message} id={messageData[3].id}/>
                </div>
            </div>
        </div>
    );
};