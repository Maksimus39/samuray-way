import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Navbar} from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/usersContainer/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";



export const App = () => {
    return (
        <div className={"App-wrapper"}>
            <Header/>
            <div className={"App-wrapper-content"}>
                <Navbar/>
                <Route path="/profile" render={() => <ProfileContainer/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
            <Footer/>
        </div>
    );
}