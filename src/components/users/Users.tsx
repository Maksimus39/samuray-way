import React from 'react';
import styles from './Users.module.css'
import {UsersPropsType} from "./usersContainer/UsersContainer";
import axios from "axios";
import userPhoto from "./../../assets/images/image.png"

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }

    onPageChanged=(pageNumber:any)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
        })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={styles.users}>
                <div>
                    {pages.map(p => {
                        return <span
                            className={`${styles.page} ${this.props.currentPage === p ? styles.selectedPage : ''}`}
                            onClick={()=>this.onPageChanged(p)}>{p}</span>
                    })}
                </div>

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

