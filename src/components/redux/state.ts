import maksim from "./../../assets/images/DSCF1032_1.webp"
import larisa from "./../../assets/images/SDC11937_1.webp"
import andrey from "./../../assets/images/20210313_225449.jpg"
import bogdan from "./../../assets/images/20210228_201100.webp"


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
}
export type DialogsPageType = {
    dialogData: DialogsDataType[]
    messageData: MessageDataType[]
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
        ]
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostDataType = {
        id: 2,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost)
}



