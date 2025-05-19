import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}/>
        </div>
    );
};

