import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Location  from './components/Location'
import Survey from './components/Form'
import Result from './components/Result'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
       <h1>Routing Example</h1>
       <pre>
        <Link to="/loaction/ramallah"> Ramllah </Link> 
        | <Link to="/loaction/nablus"> Nablus </Link> 
        | <Link to="/loaction/hebron"> Hebron </Link> 
       </pre>
       <pre>
        <Link to="/form"> My Form </Link> 
        
       </pre>
       <Routes>
         <Route path="/"  element={<Home/>}></Route>
         <Route path="/home"  element={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path="/loaction/:city" element={<Location/>}/>
         <Route path='/form' element={<Survey/>}></Route>
         <Route path='/result' element={<Result/>}></Route>
       </Routes>
        
    </>
  )
}

export default App
