import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";
import {StateType} from "./components/redux/store";
import store from "./components/redux/reduxStore";
import {Provider} from "./storeContext/storeContext";


const rerenderEntireThree = (state: StateType) => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
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