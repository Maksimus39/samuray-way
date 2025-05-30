import React from 'react';
import {Posts} from "./posts/Posts";
import styles from "./MyPosts.module.css"
import {PostDataType,} from "../../redux/store";


export type MyPostsPropsType = {
    newPostText: string
    postData: PostDataType[]
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElement = props.postData.map(p => {
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

