import React from 'react';
import {Posts} from "./posts/Posts";
import styles from "./MyPosts.module.css"
import {MyPostsPropsType} from "./MyPostsContainer";


export const MyPosts = (props: MyPostsPropsType) => {

    const postsElement = props.profilePage.postData.map(p => {
        return <Posts id={p.id}
                      likesCount={p.likesCount}
                      message={p.message}/>
    })

    const newPostElement = React.createRef<HTMLInputElement>();

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current?.value
        if (text) {
            props.updateNewPostText(text)
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
                <button onClick={onAddPost}>Add Post</button>
                <div>My post</div>
            </div>
            {postsElement}
        </div>
    );
};

