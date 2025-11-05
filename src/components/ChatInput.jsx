import React from 'react'

const ChatInput = () => {
    return (
        <div className='flex gap-3 mb-5'>
            <input type="text" className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter a message to chatbot" />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Send</button>
        </div>
    )
}

export default ChatInput