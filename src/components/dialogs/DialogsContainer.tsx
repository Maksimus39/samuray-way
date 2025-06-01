import React from 'react';
import {addMessageActionCreator, updateNewMessagePostActionCreator} from "../redux/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../storeContext/storeContext";
import {StoreType} from "../redux/reduxStore";


export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {

                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    const onMessageChange = (message: string) => {
                        store.dispatch(updateNewMessagePostActionCreator(message))
                    }


                    return <Dialogs addMessage={addMessage}
                                    onMessageChange={onMessageChange}
                                    dialogsPage={store.getState().dialogsPage}
                                    newMessage={store.getState().dialogsPage.newMessage}
                    />
                }
            }

        </StoreContext.Consumer>
    );
};