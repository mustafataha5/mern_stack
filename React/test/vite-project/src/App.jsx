import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycom  from './components/Mycom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mycom  firstName={ "Mustafa" } lastName={ "will move " }></Mycom>
     <h1>mustafa run vite jsx</h1>
     <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    </>
  )
}

export default App
