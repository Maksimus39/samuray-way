import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {PropsTypeProfile} from "./ProfileContainer";


export const Profile = (props: PropsTypeProfile) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

