import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UserForm from './components/UserForm'
// import MovieForm from './components/MovieForm'

import MessageForm from './components/MessageForm'
import MessageDisplay from './components/MessageDisplay'
import FuritForm from './components/FuritForm'
function App() {

  const [currentMeg,setCurrentMeg] =useState("There id no message") ;

  const newMessage = (newMes)=>{
      setCurrentMeg(newMes); 
  }
  return (
    <>  
     {/* <UserForm></UserForm>
     <MovieForm></MovieForm>
     <Groceries></Groceries> */}
     {/* <MessageForm  writeMessage={newMessage} ></MessageForm>
     <MessageDisplay message={currentMeg}></MessageDisplay> */}
     <FuritForm></FuritForm>
    </>
  )
}

export default App;
