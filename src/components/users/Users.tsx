import React from 'react';
import styles from './Users.module.css'
import {UsersPropsType} from "./usersContainer/UsersContainer";
import axios from "axios";
import userPhoto from "./../../assets/images/image.png"

export const Users = (props: UsersPropsType) => {


    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            debugger
            props.setUsers(res.data.items)
        })
    }

    return (
        <div className={styles.users}>
            {props.users.map(user => {
                return <div key={user.id}>
                    <span>
                        <div className={styles.images}>
                             <img src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                        </div>
                       <div>
                           {user.followed
                               ? <button onClick={() => {
                                   props.unFollow(user.id)
                               }}>UnFollow</button>
                               : <button onClick={() => {
                                   props.follow(user.id)
                               }}>Follow</button>}
                       </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            {/* <div>{user.location.city}</div>*/}
                            {/*<div>{user.location.country}</div>*/}
                        </span>
                    </span>
                </div>
            })}
        </div>
    );
};

