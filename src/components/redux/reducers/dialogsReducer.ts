import {DialogsPageType, DispatchActionType, MessageDataType} from "../state";

export type AddMessageActionType = {
    type: "ADD_MESSAGE"
}
export type UpdateNewMessagePostActionType = {
    type: "UPDATE_NEW_MESSAGE_POST"
    newMessage: string
}

export const addMessageActionCreator = (): AddMessageActionType => ({
    type: "ADD_MESSAGE" as const
})
export const updateNewMessagePostActionCreator = (newMessage: string): UpdateNewMessagePostActionType => ({
    type: "UPDATE_NEW_MESSAGE_POST" as const,
    newMessage
})

export const dialogsReducer = (state: DialogsPageType, action: DispatchActionType) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            const newMessage: MessageDataType = {
                id: 5,
                message: state.newMessage
            }
            state.messageData.push(newMessage)
            state.newMessage = ""
            return state;
        case "UPDATE_NEW_MESSAGE_POST":
            state.newMessage = action.newMessage
            return state;
        default:
            return state
    }
}