import { useState } from 'react'

// import './App.css'

import FormWrapper from './components/FormWrapper'
import NavBar from './components/NavBar'
import Wrapper from './components/Wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Wrapper>
      <NavBar></NavBar>
      <FormWrapper></FormWrapper>
    </Wrapper>
  )
}

export default App
