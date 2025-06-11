import React from 'react';
import styles from './Users.module.css'
import {UsersPropsType} from "./usersContainer/UsersContainer";
import axios from "axios";
import userPhoto from "./../../assets/images/image.png"

export class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                debugger
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div className={styles.users}>
                {this.props.users.map(user => {
                    return <div key={user.id}>
                    <span>
                        <div className={styles.images}>
                             <img src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                        </div>
                       <div>
                           {user.followed
                               ? <button onClick={() => {
                                   this.props.unFollow(user.id)
                               }}>UnFollow</button>
                               : <button onClick={() => {
                                   this.props.follow(user.id)
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
    }
}

