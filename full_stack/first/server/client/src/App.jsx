import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './views/Main'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'
import UpdatePerson from './components/UpdatePerson'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>

     <Route path='/' element={<Main/>} ></Route> 
     <Route element={<Main/>} path="/people/" />
     <Route element={<Detail/>} path="/people/:id" />
     <Route element={<UpdatePerson/>} path='/people/:id/edit'></Route>
    </Routes>
    </>
  )
}

export default App
