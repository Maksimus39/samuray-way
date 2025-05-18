import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsDataType, MessageDataType} from "../../index";

export type DialogsPropsType = {
    dialogData: DialogsDataType[]
    messageData: MessageDataType[]
}
export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogData.map(d => {
        return <DialogItem id={d.id} name={d.name}/>
    })

    const messagesElement = props.messageData.map(m => {
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