import styles from './Message.module.css'

type MessageProps = {
    id:number
    message: string
}
export const Message = (props: MessageProps) => {
    return (
        <div key={props.id}>
            {props.message}
        </div>
    )
}