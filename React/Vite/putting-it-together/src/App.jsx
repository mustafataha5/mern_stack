import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      <PersonCard firstName="Mustafa" lastName="Taha" age={29} hairColoe="black"></PersonCard> 
      <PersonCard firstName="Test" lastName="Test" age={24} hairColoe="black"></PersonCard>
      <PersonCard firstName="Test1" lastName="Test1" age={20} hairColoe="black"></PersonCard>       
      </div>
    </>
  )
}

export default App
