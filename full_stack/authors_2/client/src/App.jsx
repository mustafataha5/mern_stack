import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Card from '@mui/material/Card'
import Main from './views/Main'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='m-5'>
      <Card variant="outlined" >
        <h1>Favorite Author</h1>
        <Main />
      </Card>

    </div>
  )
}

export default App
