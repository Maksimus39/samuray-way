import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../redux/state";


export type DialogsPropsType = {
    dialogsPage: DialogsPageType
}
export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogsPage.dialogData.map(d => {
        return <DialogItem id={d.id} name={d.name}/>
    })

    const messagesElement = props.dialogsPage.messageData.map(m => {
        return <Message id={m.id} message={m.message}/>
    })

    return (
        <div className={styles.contentDialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.item}>
                    {dialogsElement}
                </div>
            </div>


            <div className={styles.messagesItem}>
                <div className={styles.messages}>
                    {messagesElement}
                </div>
            </div>
        </div>
    );
};