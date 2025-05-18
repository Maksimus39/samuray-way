import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostDataType} from "../../index";

type ProfilePropsType = {
    postData: PostDataType[]
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
};

