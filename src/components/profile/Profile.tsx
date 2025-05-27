import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {DispatchActionType, ProfilePageType, StoreType} from "../redux/state";


type ProfilePropsType = {
    store: StoreType
    dispatch: (action: DispatchActionType) => void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts
                store={props.store}
                newPostText={props.store._state.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

