import React from 'react'

const ChatInput = () => {
    return (
        <div className='flex gap-3'>
            <input type="text" class="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter a message" />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Send</button>
        </div>
    )
}

export default ChatInput