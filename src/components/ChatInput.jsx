
import { useState } from "react";
const ChatInput = ({ onSend }) => {
    const [input, setInput] = useState("");
    const sendHandler = () => {
        onSend(input);
        setInput("");
    };
    return (
        <div className='flex gap-3 mb-5'>
            <input type="text" className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter a message to chatbot" onChange={(e) => setInput(e.target.value)} />
            <button className={`bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer ${input.trim() === ""
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-blue-700 text-white"
                }`} onClick={sendHandler} disabled={input.trim() === ""}>
                Send</button>
        </div>
    )
}

export default ChatInput