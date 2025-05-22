import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {
    addMessage,
    addPost,
    state,
    StateType,
    subscribe,
    updateNewMessagePost,
    updateNewPostText
} from "./components/redux/state";
import React from "react";

const rerenderEntireThree = (state: StateType) => {
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


rerenderEntireThree(state)

subscribe(rerenderEntireThree)