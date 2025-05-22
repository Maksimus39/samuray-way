import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {addPost, StateType, updateNewPostText} from "./components/redux/state";
import React from "react";

export const rerenderEntireThree = (state: StateType) => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                />

            </BrowserRouter>,
            document.getElementById('root')
        )
    )
}