import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";

export type DialogsDataType = {
    id: number
    name: string
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

const dialogData: DialogsDataType[] = [
    {id: 1, name: "Maksim"},
    {id: 2, name: "Larisa"},
    {id: 3, name: "Andrey"},
    {id: 4, name: "Bogdan"}
]

const messageData: MessageDataType[] = [
    {id: 1, message: 'Я горжусь вами, мои дорогие, всегда будьте счастливы и заботьтесь друг о друге.'},
    {id: 2, message: 'Дорогая, ты моя опора и вдохновение, с тобой каждый день наполнен любовью и счастьем.'},
    {id: 3, message: 'Сынок, ты наш лидер и пример для всех, гордимся твоими успехами и верим в тебя.'},
    {id: 4, message: 'Сынок, ты наше солнышко, радуешь нас каждый день своей улыбкой и добротой.'}
]

const postData: PostDataType[] = [
    {id: 1, message: `Hi,how are you?`, likesCount: 10}
]

ReactDOM.render(
    <App dialogData={dialogData}
         messageData={messageData}
         postData={postData}/>,
    document.getElementById('root')
);