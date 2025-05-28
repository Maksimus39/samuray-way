import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {DispatchActionType} from "../redux/store";
import {StoreType} from "../redux/reduxStore";


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
                newPostText={props.store.getState().profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

