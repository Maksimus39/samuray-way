import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import store, {StateType} from "./components/redux/state";
import React from "react";

const rerenderEntireThree = (state: StateType) => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateNewMessagePost={store.updateNewMessagePost.bind(store)}
                />

            </BrowserRouter>,
            document.getElementById('root')
        )
    )
}


rerenderEntireThree(store.getState())

store.subscribe(rerenderEntireThree)