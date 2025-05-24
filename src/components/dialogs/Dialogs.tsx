import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType, DispatchActionType} from "../redux/state";


export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    // addMessage: () => void
    // updateNewMessagePost: (newMessage: string) => void
    newMessage: string
    dispatch: (action: DispatchActionType) => void
}
export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogsPage.dialogData.map(d => {
        return <DialogItem id={d.id} name={d.name} img={d.img}/>
    })

    const messagesElement = props.dialogsPage.messageData.map(m => {
        return <Message id={m.id} message={m.message}/>
    })

    const newMessageElement = React.createRef<HTMLInputElement>();

    const addMessage = () => {
        // const text = newPostElement.current?.value
        // return alert(text)
        // props.addMessage()
        props.dispatch({type: "ADD_MESSAGE"})
    }

    const onMessageChange = () => {
        const message = newMessageElement.current?.value
        if (message) {
            // props.updateNewMessagePost(message)
            props.dispatch({type: "UPDATE_NEW_MESSAGE_POST", newMessage: message})
        }
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
                    <input ref={newMessageElement}
                           placeholder={'input message'}
                           onChange={onMessageChange}
                           value={props.newMessage}
                    />
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
};