import { useState } from 'react';
import './App.css'
import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    if (text.trim() === "") return;

    const newMessage = {
      id: crypto.randomUUID(),
      text,
      sender: "user",
    };
    const response = Chatbot.getResponse(text);

    setMessages((prev) => [
      ...prev,
      newMessage,
      {
        id: crypto.randomUUID(),
        text: response,
        sender: "robot",
      },
    ]);
  };

  return (
    <>
      <div className='max-w-2xl mx-auto pt-5'>
        <ChatInput onSend={handleSendMessage} />
        <ChatMessages messages={messages} />
      </div>
    </>
  )
}

export default App
