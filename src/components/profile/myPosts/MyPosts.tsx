import React from 'react';
import {Posts} from "./posts/Posts";
import styles from "./MyPosts.module.css"
import {DispatchActionType, ProfilePageType} from "../../redux/state";

export type MyPostsPropsType = {
    profilePage: ProfilePageType
    // addPost: () => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
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
        // props.addPost()
        props.dispatch({type: "ADD_POST_ACTION_TYPE"})
    }

    const onPostChange = () => {
        const text = newPostElement.current?.value
        if (text) {
            // props.updateNewPostText(text)
            props.dispatch({type: "UPDATE_NEW_POST_TEXT", newText: text})
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

