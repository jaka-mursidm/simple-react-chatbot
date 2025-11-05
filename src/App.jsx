import { useState } from 'react';
import './App.css'
import ChatInput from './components/ChatInput'
import ChatMessage from './components/ChatMessages'
function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello chatbot!',
      sender: 'user'
    },
    {
      id: 2,
      text: 'Hello! How can i help you? 😀',
      sender: 'robot'
    }
  ]);
  // fungsi untuk menambah pesan baru
  const handleSendMessage = (text) => {
    if (text.trim() === "") return;

    const newMessage = {
      id: crypto.randomUUID,
      text,
      sender: "user",
    };

    // tambahkan pesan user + balasan dummy robot
    setMessages((prev) => [
      ...prev,
      newMessage,
      {
        id: crypto.randomUUID,
        text: "I'm a bot! You said: " + text,
        sender: "robot",
      },
    ]);
  };

  return (
    <>
      <div className='max-w-2xl mx-auto pt-5'>
        <ChatInput onSend={handleSendMessage} />
        <ChatMessage messages={messages} />
      </div>
    </>
  )
}

export default App
