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
import {StateType} from "./components/redux/state";


type AppPropsType = {
    state: StateType
}
export const App = (props: AppPropsType) => {
    return (
            <div className={"App-wrapper"}>
                <Header/>
                <div className={"App-wrapper-content"}>
                    <Navbar/>
                    <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>
    );
}