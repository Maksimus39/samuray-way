import React from 'react';
import styles from "../Profile.module.css";
import {Posts} from "./posts/Posts";

export const MyPosts = () => {

    const postData = [
        {id: 1, message: `Hi,how are you?`, likesCount: 10}
    ]

    return (
        <div className={styles.section}>
            <div>
                My post
                <div>Ava + description</div>
                <input type="text"/>
                <button>Add Post</button>
            </div>
            <Posts id={postData[0].id} likesCount={postData[0].likesCount} message={postData[0].message}/>
        </div>
    );
};

