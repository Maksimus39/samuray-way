import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";
import store from "./components/redux/reduxStore";
import {Provider} from "react-redux";


const rerenderEntireThree = () => {
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
rerenderEntireThree()

store.subscribe(() => {
    const state = store.getState()
    rerenderEntireThree()
})