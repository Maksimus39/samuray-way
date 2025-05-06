import React from 'react';
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.list}>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </div>

    );
};