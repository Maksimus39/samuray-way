import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {StoreType} from "../redux/reduxStore";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";


type ProfilePropsType = {
    store: StoreType
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
};

