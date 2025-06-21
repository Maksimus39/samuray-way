import React from 'react';
import preLoader from "../../../assets/svg/preLoader.gif";
import styled from "../../users/Users.module.css";

export const Preloader = () => {
    return (
        <div><img src={preLoader} alt="Loader" className={styled.preLoader}/></div>
    );
};

