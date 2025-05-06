import React from 'react';
import styles from './Profile.module.css'


export const Profile = () => {
    return (
        <div className={styles.content}>
            <img
                src="https://src-sakha.ru/images/2022/12/19/%D1%81%D0%BE%D1%86%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D1%82%D0%B8%D0%B2%D0%B0.jpg"
                alt="img"/>
            <div>
                <div className={styles.section}>
                    <div>
                        Ava + description
                        <div>
                            Post
                            <div>Post-1</div>
                            <div>Post-2</div>
                            <div>Post-3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

