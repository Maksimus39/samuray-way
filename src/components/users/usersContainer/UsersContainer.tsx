import {connect} from "react-redux";
import {Users} from "../Users";
import {AppRootState} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unFollowActionCreator,
    UsersDataType
} from "../../redux/reducers/usersReducer";


type MapStateToPropsType = {
    users: UsersDataType[],
    pageSize:number,
    totalUsersCount:number
    currentPage:number
}
type MapDispatchPropsType = {
    follow: (usersID: number) => void
    unFollow: (usersID: number) => void
    setUsers: (users: UsersDataType[]) => void
    setCurrentPage:(currentPage: number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        setCurrentPage:(currentPage: number)=>{
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsersCount:(totalUsersCount:number)=>{
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        }
    }
}

export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType


export default connect(mapStateToProps, mapDispatchToProps)(Users)

