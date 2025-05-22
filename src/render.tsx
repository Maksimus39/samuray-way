import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {addMessage, addPost, StateType, updateNewMessagePost, updateNewPostText} from "./components/redux/state";
import React from "react";

export const rerenderEntireThree = (state: StateType) => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     addMessage={addMessage}
                     updateNewMessagePost={updateNewMessagePost}
                />

            </BrowserRouter>,
            document.getElementById('root')
        )
    )
}