import {NavLink} from "react-router-dom";
import React from "react";
import styles from './DialogItem.module.css'

type DialogItemProps = {
    id: number
    name: string
}
export const DialogItem = (props: DialogItemProps) => {
    return (
        <div key={props.id}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}