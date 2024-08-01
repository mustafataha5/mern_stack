import { useState } from 'react'

import './App.css'

import Section from './components/Section'
import Heading from './components/Heading'
import { LevelContext } from './context/LevelContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MyContext.Provider value="vaule by context">
        <MyComponent > </MyComponent>
      </MyContext.Provider> */}
      <p>Context Test</p>

       <Section >
        <Heading >Title</Heading>
        <Section >
          <Heading >Heading</Heading>
          <Heading >Heading</Heading>
          <Section >
            <Heading >Sub-heading</Heading>
            <Heading >Sub-heading</Heading>
            <Heading >Sub-heading</Heading>
            <Section >
              <Heading >Sub-sub-heading</Heading>
              <Heading >Sub-sub-heading</Heading>
              <Heading >Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section> 
    </>
  )
}

export default App
