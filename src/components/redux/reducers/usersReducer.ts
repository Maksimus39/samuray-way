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
}


const usersInitialState: UsersInitialStateType = {
    users: []
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
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
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


export const followActionCreator = (usersID: number): FollowActionType => ({
    type: "FOLLOW" as const,
    usersID
})

export const unFollowActionCreator = (usersID: number): UnFollowActionType => ({
    type: "UNFOLLOW" as const,
    usersID
})

export const setUsersActionCreator = (users: UsersDataType[]): SetUsersActionType => ({
    type: "SET_USERS" as const,
    users
})

