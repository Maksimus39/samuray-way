import React from 'react';
import {Posts} from "./posts/Posts";
import styles from "./MyPosts.module.css"

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

            {postData.map(p=>{
                return <Posts id={p.id}
                              likesCount={p.likesCount}
                              message={p.message}/>
            })}
        </div>
    );
};

