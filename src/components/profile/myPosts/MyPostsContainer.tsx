import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducers/profilereducer";
import {StoreType} from "../../redux/reduxStore";
import {MyPosts} from "./MyPosts";

export type MyPostsPropsType = {
    store: StoreType
}


export const MyPostsContainer = (props: MyPostsPropsType) => {
    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        const action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 postData={state.profilePage.postData}
                 newPostText={state.profilePage.newPostText}
        />
    );
};

