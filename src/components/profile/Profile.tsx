import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

