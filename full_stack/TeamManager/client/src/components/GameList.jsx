import React, { useEffect, useRef, useState } from 'react'
import GameHeader from '../views/GameHeader'
import axios from 'axios';
import GameButtos from './GameButtos';

const GameList = () => {

  const [playerList, setPlayerList] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
      .then(res => {
        setPlayerList(res.data.players);
        loaded.current = true;
        console.log(loaded.current)
      })
      .catch(err => console.log(err));
  }, [])

  if (loaded.current == false) {
    return (<div>
      <GameHeader >
        <p>Loading...</p>
      </GameHeader >
    </div>
    )
  }
  else {
    return (
      <div>

        <GameHeader >
          <table className='table text-center'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {playerList.map((player,i)=>{
              return (
                <tr>
                  <td>{player.name}</td>
                  <td><GameButtos/></td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </GameHeader>
      </div>
    )
  }
}

export default GameList
