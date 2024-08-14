import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import io from 'socket.io-client';
import Chat from './components/Chat';
import Header from './views/Header';
import StartChat from './components/StartChat';
function App() {

  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    //console.log('Is this running?');



    socket.on('message', data => {
      //console.log(data)
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.removeAllListeners();
    }
  }, [socket]);

  const renderMessage = (newMassage) => {

    socket.emit("message", { name, message: newMassage });

  }

  return (
    <>
      <Header />
      {name.length === 0 ? <StartChat setName={setName} /> : <Chat name={name} renderMessage={renderMessage} messages={messages} setMessages={setMessages} />}
    </>
  )
}

export default App
