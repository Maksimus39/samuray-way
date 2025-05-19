import React from 'react';
import {Posts} from "./posts/Posts";
import styles from "./MyPosts.module.css"
import {ProfilePageType} from "../../redux/state";


export type MyPostsPropsType = {
    profilePage: ProfilePageType
}
export const MyPosts = (props: MyPostsPropsType) => {

    const postsElement = props.profilePage.postData.map(p => {
        return <Posts id={p.id}
                      likesCount={p.likesCount}
                      message={p.message}/>
    })

    const newPostElement = React.createRef<HTMLInputElement>();

    const addPost = () => {
        const text = newPostElement.current?.value
        return alert(text)
    }

    return (
        <div className={styles.section}>
            <div>Ava + description</div>
            <div>
                <input ref={newPostElement}/>
                <button onClick={addPost}>Add Post
                </button>
                <div>My post</div>
            </div>
            {postsElement}
        </div>
    );
};

