import React, { useEffect, useRef, useState } from 'react'
import GameHeader from '../views/GameHeader'
import axios from 'axios';
import GameButtos from './GameButtos';
import { useNavigate, useParams } from 'react-router-dom';

const GameList = () => {

  const [playerList, setPlayerList] = useState([]);
  const gameArray = ["66bdbb8104d00aa1f13c471f","66bdbb8604d00aa1f13c4721","66bdbb8d04d00aa1f13c4723"];
  const [loaded,setLoaded] = useState(false) ;
  const { gameId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    console.log(gameId + " ----- " + gameArray[gameId - 1])
    axios.get("http://localhost:8000/api/games/player/" + gameArray[gameId - 1])
      .then(res => {
       // console.log(res.data)
        setPlayerList(res.data.players);
        setLoaded(true);
        //console.log(loaded.current)
        navigate("/players/game/"+gameId);
      })
      .catch(err => {
        setLoaded(false);
        console.log(err)});
  }, [gameId,loaded])



  if (loaded== false) {
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
              {playerList.map((player, i) => {
               // console.log(player)
                return (
                  <tr key={i}>
                    <td>{player.player.name}</td>
                    <td><GameButtos status={player.status} setLoaded={setLoaded} id={player.player._id} game={gameId} gameId={gameArray[gameId-1]}/></td>
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
