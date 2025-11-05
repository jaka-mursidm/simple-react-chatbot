import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faCircleUser } from '@fortawesome/free-solid-svg-icons'
const ChatMessage = () => {
    const messages = [{
        id: 1,
        text: 'Hello chatbot!',
        sender: 'user'
    }, {
        id: 2,
        text: 'Hello! How can i help you?😀',
        sender: 'robot'
    }, {
        id: 3,
        text: 'Can you get met todays date?',
        sender: 'user'
    }, {
        id: 4,
        text: 'Today is November 05?',
        sender: 'robot'
    }
    ];

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

export default ChatMessage