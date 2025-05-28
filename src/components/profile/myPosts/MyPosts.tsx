import React from 'react';
import {Posts} from "./posts/Posts";
import styles from "./MyPosts.module.css"
import {
    DispatchActionType,
    StoreType,
} from "../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducers/profilereducer";

export type MyPostsPropsType = {
    store: StoreType
    newPostText: string
    dispatch: (action: DispatchActionType) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    const state = props.store.getState().profilePage

    const postsElement = state.postData.map(p => {
        return <Posts id={p.id}
                      likesCount={p.likesCount}
                      message={p.message}/>
    })

    const newPostElement = React.createRef<HTMLInputElement>();

    const addPost = () => {
        if (props.newPostText.trim()) {
            props.dispatch(addPostActionCreator());
        }
    }

    const onPostChange = () => {
        const text = newPostElement.current?.value
        if (text) {
            props.dispatch(updateNewPostTextActionCreator(text))
        }
    }

    return (
        <div className={styles.section}>
            <div>Ava + description</div>
            <div>
                <input ref={newPostElement}
                       placeholder={'input text'}
                       onChange={onPostChange}
                       value={props.newPostText}
                />
                <button onClick={addPost}>Add Post</button>
                <div>My post</div>
            </div>
            {postsElement}
        </div>
    );
};

