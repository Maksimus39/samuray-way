import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";

export const App = () => {
    return (
        <div className={"App-wrapper"}>
            <Header/>
            <div className={"App-wrapper-content"}>
                <Navbar/>
                {/*<Profile/>*/}
                <Dialogs/>
            </div>
            <Footer/>
        </div>
    );
}