import {NavLink} from "react-router-dom";
import React from "react";
import styles from './DialogItem.module.css'

type DialogItemProps = {
    id: number
    name: string
    img: string
}
export const DialogItem = (props: DialogItemProps) => {
    return (
        <div key={props.id}>
            <NavLink to={`/dialogs/${props.id}`}>
                <img src={props.img} alt={props.name} className={styles.dialogImage} />
                {props.name}
            </NavLink>
        </div>
    )
}