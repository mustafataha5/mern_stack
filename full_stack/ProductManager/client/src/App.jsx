import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'
import Main from './views/Main'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/products'  element={<Main/>}></Route>
     <Route path='/products/:id' element={<ProductDetails/>}></Route>
    </Routes>
    </>
  )
}

export default App
