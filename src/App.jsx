import './App.css'
import ChatInput from './components/ChatInput'
import ChatMessage from './components/ChatMessage'
function App() {

  return (
    <>
      <div className='max-w-2xl mx-auto pt-5'>
        <ChatInput />
        <ChatMessage message="Hello chatbot!" sender="user" />
        <ChatMessage message="Hello! How can i help you?😀" sender="robot" />
        <ChatMessage message="Can you get met todays date?" sender="user" />
        <ChatMessage message="Today is November 05?" sender="robot" />
      </div>
    </>
  )
}

export default App
