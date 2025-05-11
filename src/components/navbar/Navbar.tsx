import React from 'react';
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.list}>
            <a href="/profile">Profile</a>
            <a href="/dialogs">Messages</a>
            <a href="/news">News</a>
            <a href="/music">Music</a>
            <a href="/settings">Settings</a>
        </div>
    );
};