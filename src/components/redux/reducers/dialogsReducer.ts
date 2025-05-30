import {DialogsPageType, DispatchActionType, MessageDataType} from "../store";
import maksim from "../../../assets/images/DSCF1032_1.webp";
import larisa from "../../../assets/images/SDC11937_1.webp";
import andrey from "../../../assets/images/20210313_225449.jpg";
import bogdan from "../../../assets/images/20210228_201100.webp";

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

const dialogsInitialState = {
    dialogData: [
        {id: 1, name: "Maksim", img: maksim},
        {id: 2, name: "Larisa", img: larisa},
        {id: 3, name: "Andrey", img: andrey},
        {id: 4, name: "Bogdan", img: bogdan}
    ],
    messageData: [
        {id: 1, message: 'Я горжусь вами, мои дорогие, всегда будьте счастливы и заботьтесь друг о друге.'},
        {
            id: 2,
            message: 'Дорогая, ты моя опора и вдохновение, с тобой каждый день наполнен любовью и счастьем.'
        },
        {id: 3, message: 'Сынок, ты наш лидер и пример для всех, гордимся твоими успехами и верим в тебя.'},
        {id: 4, message: 'Сынок, ты наше солнышко, радуешь нас каждый день своей улыбкой и добротой.'}
    ],
    newMessage: ""
}

export const dialogsReducer = (state = dialogsInitialState, action: DispatchActionType): DialogsPageType => {
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