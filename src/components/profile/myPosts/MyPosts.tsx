import React from 'react';
import {Posts} from "./posts/Posts";
import styles from "./MyPosts.module.css"
import {PostDataType} from "../../../index";


export type MyPostsPropsType = {
    postData: PostDataType[]
}
export const MyPosts = (props:MyPostsPropsType) => {

    const postsElement = props.postData.map(p => {
        return <Posts id={p.id}
                      likesCount={p.likesCount}
                      message={p.message}/>
    })

    return (
        <div className={styles.section}>
            <div>Ava + description</div>
            <div>
                <input type="text"/>
                <button>Add Post</button>
                <div>My post</div>
            </div>
            {postsElement}
        </div>
    );
};

