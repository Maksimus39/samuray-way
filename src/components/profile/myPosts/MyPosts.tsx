import React from 'react';
import {Posts} from "./posts/Posts";
import styles from "./MyPosts.module.css"
import {
    addPostActionCreator,
    DispatchActionType,
    ProfilePageType, updateNewPostTextActionCreator
} from "../../redux/state";

export type MyPostsPropsType = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: DispatchActionType) => void
}



export const MyPosts = (props: MyPostsPropsType) => {

    const postsElement = props.profilePage.postData.map(p => {
        return <Posts id={p.id}
                      likesCount={p.likesCount}
                      message={p.message}/>
    })

    const newPostElement = React.createRef<HTMLInputElement>();

    const addPost = () => {
        props.dispatch(addPostActionCreator())
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

