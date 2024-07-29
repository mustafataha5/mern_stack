import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import Profile from './components/Profile'
import ProductList from './components/ProductsList'
import "./css/main.css" ; 
import Counter from './components/Counter'
import Log from './components/Log'
import MyNewComponent from './components/MyComponent'



function App() {
 

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Welcome to my app</h1>
      <MyNewComponent header={ ">>> Header Prop <<<" }>
            <h1>These are children</h1>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>  
    </>
  )
}

export default App
