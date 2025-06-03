import {connect} from "react-redux";
import {Users} from "../Users";
import {AppRootState} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followActionCreator,
    setUsersActionCreator,
    unFollowActionCreator,
    UsersDataType
} from "../../redux/reducers/usersReducer";


type MapStateToPropsType = {
    users: UsersDataType[]
}
type MapDispatchPropsType = {
    follow: (usersID: number) => void
    unFollow: (usersID: number) => void
    setUsers: (users: UsersDataType[]) => void
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType


export default connect(mapStateToProps, mapDispatchToProps)(Users)

