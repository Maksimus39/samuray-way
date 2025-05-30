import React from 'react';
import {addMessageActionCreator, updateNewMessagePostActionCreator} from "../redux/reducers/dialogsReducer";
import {StoreType} from "../redux/reduxStore";
import {Dialogs} from "./Dialogs";


export type DialogsPropsType = {
    store: StoreType
}
export const DialogsContainer = (props: DialogsPropsType) => {

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (message: string) => {
        props.store.dispatch(updateNewMessagePostActionCreator(message))
    }

    return (
        <Dialogs addMessage={addMessage}
                 onMessageChange={onMessageChange}
                 dialogsPage={props.store.getState().dialogsPage}
                 newMessage={props.store.getState().dialogsPage.newMessage}
        />
    );
};