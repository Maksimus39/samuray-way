import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {DialogsDataType, MessageDataType, PostDataType} from "./index";


type AppPropsType = {
    dialogData: DialogsDataType[]
    messageData: MessageDataType[]
    postData: PostDataType[]
}
export const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={"App-wrapper"}>
                <Header/>
                <div className={"App-wrapper-content"}>
                    <Navbar/>
                    <Route path="/profile" render={() => <Profile postData={props.postData}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogData={props.dialogData}
                                                                  messageData={props.messageData}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}