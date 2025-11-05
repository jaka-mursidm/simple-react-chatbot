import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faCircleUser } from '@fortawesome/free-solid-svg-icons'
const ChatMessages = ({ messages }) => {
    return (
        <>
            {messages.map((message) => {
                return (
                    <div key={message.id} className={`flex gap-1 items-center mb-4 ${message.sender === "user" ? "justify-end" : ""
                        }`}>
                        {message.sender === "robot" && (<FontAwesomeIcon icon={faRobot} className='text-4xl text-blue-500' />
                        )}
                        <div className='bg-slate-200 rounded py-2 px-3'>{message.text}</div>
                        {message.sender === "user" && (<FontAwesomeIcon icon={faCircleUser} className='text-4xl text-blue-500' />)}
                    </div>
                )
            })}

        </>
    );
}

export default ChatMessages