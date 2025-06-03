import { DispatchActionType, PostDataType, ProfilePageType } from "../store";

export type AddPostActionType = {
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

const profileInitialState: ProfilePageType = {
    postData: [
        { id: 1, message: `Hi,how are you?`, likesCount: 10 }
    ],
    newPostText: "",
}

export const profileReducer = (state = profileInitialState, action: DispatchActionType): ProfilePageType => {
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
        default:
            return state;
    }
}