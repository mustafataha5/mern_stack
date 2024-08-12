import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Header from './views/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import PlayerList from './components/PlayerList'
import GameList from './components/GameList'
import InnerHeadre from './views/InnerHeadre'
import PlayerForm from './components/PlayerForm'
import PlayerUpdate from './components/PlayerUpdate'
import PlayerCreate from './components/PlayerCreate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> 
      <Routes > 
        <Route path='/' element={<Navigate to="/players"></Navigate>}></Route>
        <Route path='/players/' element={<InnerHeadre />}></Route>
        <Route path="/players/list" element={<PlayerList/>}></Route> 
        <Route path="/players/addplayer" element={<PlayerCreate/>}></Route>   
        <Route path='/players/game' element={<GameList />}></Route>
        <Route path="/players/:id" element={<PlayerUpdate/>}></Route>   
      </Routes>
    </>
  )
}

export default App
