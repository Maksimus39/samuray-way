import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducers/profilereducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../storeContext/storeContext";
import {StoreType} from "../../redux/reduxStore";


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {
                    const state = store.getState()

                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    const onPostChange = (text: string) => {
                        const action = updateNewPostTextActionCreator(text)
                        store.dispatch(action)
                    }

                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    postData={state.profilePage.postData}
                                    newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    );
};

