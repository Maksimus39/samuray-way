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
        return <DialogItem id={d.id} name={d.name} img={d.img}/>
    })

    const messagesElement = props.dialogsPage.messageData.map(m => {
        return <Message id={m.id} message={m.message}/>
    })

    const newPostElement = React.createRef<HTMLInputElement>();

    const addMessage = () => {
        const text = newPostElement.current?.value
        return alert(text)
    }

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
                <div>
                    <input ref={newPostElement}/>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
};