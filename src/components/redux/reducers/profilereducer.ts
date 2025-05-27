import {DispatchActionType, PostDataType, ProfilePageType} from "../state";

export type  AddPostActionType = {
    type: "ADD_POST_ACTION_TYPE"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}


export const addPostActionCreator = (): AddPostActionType => ({
    type: "ADD_POST_ACTION_TYPE" as const
})
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ({
    type: "UPDATE_NEW_POST_TEXT" as const,
    newText
})

export const profileReducer = (state: ProfilePageType, action: DispatchActionType) => {
    switch (action.type) {
        case "ADD_POST_ACTION_TYPE":
            const newPost: PostDataType = {
                id: 2,
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = ""
            return state;
        case "UPDATE_NEW_POST_TEXT":
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}