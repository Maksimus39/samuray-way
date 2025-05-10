import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={styles.content}>
            <img
                src="https://src-sakha.ru/images/2022/12/19/%D1%81%D0%BE%D1%86%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D1%82%D0%B8%D0%B2%D0%B0.jpg"
                alt="img"/>
            <div>
                <div>
                    <div>Ava + description</div>
                    <input type="text"/>
                    <button>Add Post</button>
                </div>
                <MyPosts/>
            </div>
        </div>
    );
};

