import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/image.png";
import {UsersDataType} from "../redux/reducers/usersReducer";


type UsersProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersDataType[]
    unFollow: (usersID: number) => void
    follow: (usersID: number) => void
}
export const Users = (props: UsersProps) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.users}>
            <div>
                {pages.map(p => {
                    return <span
                        className={`${styles.page} ${props.currentPage === p ? styles.selectedPage : ''}`}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>

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

