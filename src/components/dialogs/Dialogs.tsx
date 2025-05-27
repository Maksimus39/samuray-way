import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {
    addMessageActionCreator,
    DispatchActionType, StoreType,
    updateNewMessagePostActionCreator
} from "../redux/state";


export type DialogsPropsType = {
    newMessage: string
    store: StoreType
    dispatch: (action: DispatchActionType) => void
}
export const Dialogs = (props: DialogsPropsType) => {

    const state = props.store.getState().dialogsPage

    const dialogsElement = state.dialogData.map(d => {
        return <DialogItem id={d.id} name={d.name} img={d.img}/>
    })

    const messagesElement = state.messageData.map(m => {
        return <Message id={m.id} message={m.message}/>
    })

    const newMessageElement = React.createRef<HTMLInputElement>();

    const addMessage = () => {
        if(props.newMessage.trim()){
            props.dispatch(addMessageActionCreator())
        }
    }

    const onMessageChange = () => {
        const message = newMessageElement.current?.value
        if (message) {
            props.dispatch(updateNewMessagePostActionCreator(message))
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