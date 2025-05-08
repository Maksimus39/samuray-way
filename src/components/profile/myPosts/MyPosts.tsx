import React from 'react';
import styles from "../Profile.module.css";
import {Posts} from "./posts/Posts";

export const MyPosts = () => {
    return (
        <div className={styles.section}>
            <div>
                Ava + description
                <div><Posts/></div>
            </div>
        </div>
    );
};

