import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import PlayerList from './views/PlayerList'
import axios from 'axios'
import GameStatus from './views/GameStatus'
import PlayerAdd from './views/PlayerAdd'

function App(props) {
  const location = useLocation();
  const [bold, setBold] = useState([true,false])
  const [playerbold, setPlayerBold] = useState([true,false])
  const [players,setPlayers] =useState([]); 

  useEffect(() => {
    
    if (location.pathname === '/players/list') {
      setBold([true, false]);
      setPlayerBold([true,false]) ;
      axios.get("http://localhost:8000/api/players")
      .then(res => {console.log(res.data.players)
        setPlayers(res.data.players) ; 
      })
      .catch(err => console.log(err));
    }
    
    else if (location.pathname === '/players/add') {
      setBold([true, false]);
      setPlayerBold([false,true]) ;
    }
    
    else if (location.pathname.startsWith('/status/game') ) {
     // console.log("next path")
      setBold([false, true]);
    }
  }, [location.pathname]);

  return (
    <>

    <div className='border border-dark' >

    <div className='d-flex justify-content-start mx-3 my-2 p-2 '>
      
     <h1><Link className={bold[0] ? 'fw-bold' : ''} to="/players/list">Mange Player</Link>  </h1> 
      <h1 className='mx-2'>|</h1>
      <h1>
      <Link className={bold[1] ? 'fw-bold' : ''} to="/status/game/1"> Manage Player Status</Link> 
      </h1>
    </div>
    
      <Routes>
        <Route path='/' element={<Navigate to="/players/list" />}></Route>
        <Route path='/players/list' element={<PlayerList bold={playerbold} setPlayers={setPlayers} players={players}/>}></Route>
        <Route path='/players/add' element={<PlayerAdd bold={playerbold}/>}></Route>
        <Route path='/status/game/:id' element={<GameStatus />}></Route>
      </Routes>
      </div>
     </>
  )
}

export default App
