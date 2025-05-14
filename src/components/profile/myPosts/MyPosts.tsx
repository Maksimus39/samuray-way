import React from 'react';
import styles from "../Profile.module.css";
import {Posts} from "./posts/Posts";

export const MyPosts = () => {
    return (
        <div className={styles.section}>
            <div>
                My post
                <div>Ava + description</div>
                <input type="text"/>
                <button>Add Post</button>
            </div>
            <Posts likes={10} message={`Hi,how are you?`}/>
        </div>
    );
};

