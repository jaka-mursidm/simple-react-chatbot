import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faCircleUser } from '@fortawesome/free-solid-svg-icons'
const ChatMessage = ({ message, sender }) => {

    return (
        <>
            <div className={`flex gap-1 items-center mb-4 ${sender === "user" ? "justify-end" : ""
                }`}>
                {sender === "robot" && (<FontAwesomeIcon icon={faRobot} className='text-4xl text-blue-500' />
                )}
                <div className='bg-slate-200 rounded py-2 px-3'>{message}</div>
                {sender === "user" && (<FontAwesomeIcon icon={faCircleUser} className='text-4xl text-blue-500' />)}
            </div>
        </>
    );
}

export default ChatMessage