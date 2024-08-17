import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import GameButton from '../components/GameButton';

const GameStatus = () => {
  const gameIds = ["66c07005872f0af0a651945f", "66c0700a872f0af0a6519461", "66c0700f872f0af0a6519463"];
  const location = useLocation();
  const [players, setPlayers] = useState([]);
  const [bold, setBold] = useState([true, false, false]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //console.log(id);
    setLoading(true)
    // Fetch player status data for the current game
    axios.get(`http://localhost:8000/api/playergame/${gameIds[id - 1]}`)
      .then(res => {
        console.log(res.data.status);
        setPlayers(res.data.status);
        setLoading(false) ;
      })
      .catch(err => console.log(err));

    // Update the bold state based on the current game ID
    setBold(prevBold => {
      const newBold = [false, false, false];
      newBold[id - 1] = true;
      return newBold;
    });
  }, [id]); // Dependency array includes `id` to refetch data when game ID changes

  const changeStatus = (newStatus, playerId) => {
    console.log(newStatus);
    axios.patch(`http://localhost:8000/api/playergame/${playerId}/${gameIds[id - 1]}`, { status: newStatus })
      .then(res => {
        console.log(res);
        // No need to navigate, `useEffect` will refetch data on game ID change
      })
      .catch(err => console.log(err));
  };


  if(loading){
    return(
    <div className='border border-dark mx-3 my-3 w-75 d-flex flex-column aligns-items-center'>
    <div className='d-flex mx-3 my-2 p-4 justify-content-center'>
      <h3><Link className={bold[0] ? 'fw-bold' : ''} to="/status/game/1">Game1</Link></h3>
      <h3 className='mx-2'>|</h3>
      <h3><Link className={bold[1] ? 'fw-bold' : ''} to="/status/game/2">Game2</Link></h3>
      <h3 className='mx-2'>|</h3>
      <h3><Link className={bold[2] ? 'fw-bold' : ''} to="/status/game/3">Game3</Link></h3>
    </div>
    <h1 className='text-center text-info'>Loading...</h1>
    </div>)
  }

  return (
    <div className='border border-dark mx-3 my-3 w-75 d-flex flex-column aligns-items-center'>
      <div className='d-flex mx-3 my-2 p-4 justify-content-center'>
        <h3><Link className={bold[0] ? 'fw-bold' : ''} to="/status/game/1">Game1</Link></h3>
        <h3 className='mx-2'>|</h3>
        <h3><Link className={bold[1] ? 'fw-bold' : ''} to="/status/game/2">Game2</Link></h3>
        <h3 className='mx-2'>|</h3>
        <h3><Link className={bold[2] ? 'fw-bold' : ''} to="/status/game/3">Game3</Link></h3>
      </div>

      <div className='m-5'>
        <table className='table table-bordered border-dark text-center'>
          <thead>
            <tr>
              <th>Name</th>
              <th className='w-75'>Status</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, i) => (
              <tr key={i}>
                <td>{player.player.name}</td>
                <td>
                  <GameButton
                    id={player.player._id}
                    status={player.status}
                    changeStatus={changeStatus}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GameStatus;
