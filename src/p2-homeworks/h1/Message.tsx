import React from 'react'
import style from './Message.module.css'

type messagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: messagePropsType) {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt={"avatar"} />
            <div className={style.message_box}>
                <p className={style.sender_name}>{props.name}</p>
                <p className={style.sent_text}>{props.message}<span className={style.time}>{props.time}</span></p>

            </div>
        </div>
    )
}

export default Message
