import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";


export const Profile = () => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

