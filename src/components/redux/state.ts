import maksim from "./../../assets/images/DSCF1032_1.webp"
import larisa from "./../../assets/images/SDC11937_1.webp"
import andrey from "./../../assets/images/20210313_225449.jpg"
import bogdan from "./../../assets/images/20210228_201100.webp"
import {rerenderEntireThree} from "../../render";


export type DialogsDataType = {
    id: number
    name: string
    img: string
}
export type MessageDataType = {
    id: number
    message: string
}
export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postData: PostDataType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogData: DialogsDataType[]
    messageData: MessageDataType[]
    newMessage: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: StateType = {
    profilePage: {
        postData: [
            {id: 1, message: `Hi,how are you?`, likesCount: 10}
        ],
        newPostText: "",
    },
    dialogsPage: {
        dialogData: [
            {id: 1, name: "Maksim", img: maksim},
            {id: 2, name: "Larisa", img: larisa},
            {id: 3, name: "Andrey", img: andrey},
            {id: 4, name: "Bogdan", img: bogdan}
        ],
        messageData: [
            {id: 1, message: 'Я горжусь вами, мои дорогие, всегда будьте счастливы и заботьтесь друг о друге.'},
            {id: 2, message: 'Дорогая, ты моя опора и вдохновение, с тобой каждый день наполнен любовью и счастьем.'},
            {id: 3, message: 'Сынок, ты наш лидер и пример для всех, гордимся твоими успехами и верим в тебя.'},
            {id: 4, message: 'Сынок, ты наше солнышко, радуешь нас каждый день своей улыбкой и добротой.'}
        ],
        newMessage: ""
    }
}

export const addPost = () => {
    const newPost: PostDataType = {
        id: 2,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireThree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireThree(state)
}

export const addMessage = () => {
    const newMessage: MessageDataType = {
        id: 5,
        message: state.dialogsPage.newMessage
    }

    state.dialogsPage.messageData.push(newMessage)
    state.dialogsPage.newMessage = ""
    rerenderEntireThree(state)
}

export const updateNewMessagePost = (newMessage: string) => {
    state.dialogsPage.newMessage = newMessage
    rerenderEntireThree(state)
}



