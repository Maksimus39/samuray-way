import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Navbar} from "./navbar/Navbar";
import {Content} from "./content/Content";

export const App = () => {
    return (
        <div className={"App-wrapper"}>
            <Header/>
            <div className={"App-wrapper-content"}>
                <Navbar/>
                <Content/>
            </div>
            <Footer/>
        </div>
    );
}