import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";
import {StateType} from "./components/redux/store";
import store from "./components/redux/reduxStore";


const rerenderEntireThree = (state: StateType) => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App store={store} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>,
            document.getElementById('root')
        )
    )
}
rerenderEntireThree(store.getState())

store.subscribe(() => {
    const state = store.getState()
    rerenderEntireThree(state)
})