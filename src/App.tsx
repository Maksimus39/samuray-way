import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {DispatchActionType} from "./components/redux/store";
import {StoreType} from "./components/redux/reduxStore";


type AppPropsType = {
    store: StoreType
    dispatch: (action: DispatchActionType) => void
}
export const App = (props: AppPropsType) => {
    return (
        <div className={"App-wrapper"}>
            <Header/>
            <div className={"App-wrapper-content"}>
                <Navbar/>
                <Route path="/profile" render={() => <Profile
                    store={props.store}
                    dispatch={props.dispatch}
                />}/>
                <Route path="/dialogs" render={() => <Dialogs
                    newMessage={props.store.getState().dialogsPage.newMessage}
                    store={props.store}
                    dispatch={props.dispatch}
                />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
            <Footer/>
        </div>
    );
}