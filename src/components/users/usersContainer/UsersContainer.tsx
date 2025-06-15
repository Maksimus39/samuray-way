import {connect} from "react-redux";
import {AppRootState} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unFollowActionCreator,
    UsersDataType
} from "../../redux/reducers/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "../Users";


type MapStateToPropsType = {
    users: UsersDataType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (usersID: number) => void
    unFollow: (usersID: number) => void
    setUsers: (users: UsersDataType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
        />
    }
}


const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (usersID: number) => {
            dispatch(followActionCreator(usersID))
        },
        unFollow: (usersID: number) => {
            dispatch(unFollowActionCreator(usersID))
        },
        setUsers: (users: UsersDataType[]) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        }
    }
}

export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

