import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import store, {StateType} from "./components/redux/state";
import React from "react";

const rerenderEntireThree = (state: StateType) => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>,
            document.getElementById('root')
        )
    )
}
rerenderEntireThree(store.getState())

store.subscribe(rerenderEntireThree)