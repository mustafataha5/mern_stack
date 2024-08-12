import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import io from 'socket.io-client';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [socket] = useState(() => io(':8000'));

  useEffect(()=>{
    console.log('Is this running?');
    socket.on('Welcome', data => console.log(data));
    socket.on("hello", (arg) => {
      console.log(arg); // world
    });
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.removeAllListeners;
  },[socket])
  return (
    <>
      <div className="App">
      <h1>Socket Test</h1>
    </div>
    </>
  )
}

export default App
