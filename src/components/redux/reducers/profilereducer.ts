import {DispatchActionType} from "../store";


export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postData: PostDataType[]
    newPostText: string
    profile: UserProfileType
}

export type AddPostActionType = {
    type: "ADD_POST_ACTION_TYPE"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}

export type SetUserProfileActionType = {
    type: "SET_USER_PROFILE",
    profile: UserProfileType
}

export const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => ({
    type: "SET_USER_PROFILE" as const,
    profile
})

export const addPostActionCreator = (): AddPostActionType => ({
    type: "ADD_POST_ACTION_TYPE" as const
})
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ({
    type: "UPDATE_NEW_POST_TEXT" as const,
    newText
})

const profileInitialState: ProfilePageType = {
    postData: [
        {id: 1, message: `Hi,how are you?`, likesCount: 10}
    ],
    newPostText: "",
    profile: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=11",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=11"
        }
    }
}

export const profileReducer = (state: ProfilePageType = profileInitialState, action: DispatchActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD_POST_ACTION_TYPE":
            const newPost: PostDataType = {
                id: state.postData.length + 1, // Автоматическая генерация ID
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost], // Добавляем пост без мутации
                newPostText: "" // Сбрасываем текст
            };
        case "UPDATE_NEW_POST_TEXT":
            return {
                ...state,
                newPostText: action.newText // Обновляем текст без мутации
            };
        case "SET_USER_PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }

        default:
            return state;
    }
}