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
import {addMessage, StateType, updateNewMessagePost, updateNewPostText} from "./components/redux/state";


type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage:()=>void
    updateNewMessagePost:(newMessage: string)=>void
}
export const App = (props: AppPropsType) => {
    return (
        <div className={"App-wrapper"}>
            <Header/>
            <div className={"App-wrapper-content"}>
                <Navbar/>
                <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
                                                              addPost={props.addPost}
                                                              updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                              addMessage={props.addMessage}
                                                              newMessage={props.state.dialogsPage.newMessage}
                                                              updateNewMessagePost={props.updateNewMessagePost}
                />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
            <Footer/>
        </div>
    );
}