import {DispatchActionType} from "../store";

type PhotosType = {
    small: ""
    large: ""
}
export type LocationType = {
    city: string
    country: string
}
export type UsersDataType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type UsersInitialStateType = {
    users: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


const usersInitialState: UsersInitialStateType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}

export const usersReducer = (state = usersInitialState, action: DispatchActionType): UsersInitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.usersID) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.usersID) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case "SET_USERS": {
            return {
                ...state, users: [...action.users, ...state.users,]
            }

        }
        case "SET_CURRENT_PAGE": {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case "SET_TOTAL_COUNT": {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case "TOGGLE_IS_FETCHING": {
            return {
                ...state, isFetching: action.isFetching
            }
        }

        default:
            return state
    }
}

export type ToggleIsFetchingActionType = {
    type: "TOGGLE_IS_FETCHING",
    isFetching: boolean
}

export type SetTotalUsersCountActionType = {
    type: "SET_TOTAL_COUNT"
    totalUsersCount: number
}

export type SetCurrentPageActionType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}


export type FollowActionType = {
    type: "FOLLOW"
    usersID: number
}
export type UnFollowActionType = {
    type: "UNFOLLOW"
    usersID: number
}
export type SetUsersActionType = {
    type: "SET_USERS"
    users: UsersDataType[]
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: "TOGGLE_IS_FETCHING" as const,
    isFetching
})

export const follow = (usersID: number): FollowActionType => ({
    type: "FOLLOW" as const,
    usersID
})

export const unFollow = (usersID: number): UnFollowActionType => ({
    type: "UNFOLLOW" as const,
    usersID
})

export const setUsers = (users: UsersDataType[]): SetUsersActionType => ({
    type: "SET_USERS" as const,
    users
})

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: "SET_CURRENT_PAGE" as const,
    currentPage
})

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: "SET_TOTAL_COUNT" as const,
    totalUsersCount
})

