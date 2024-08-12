import React, { useState } from 'react';
import PlayerForm from './PlayerForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlayerCreate = () => {
  const [Errors, setErrors] = useState({});
  const navigate = useNavigate();

  const createOnePlayer = (newPlayer) => {
    axios.post("http://localhost:8000/api/players", newPlayer)
      .then(res => { 
        console.log(res);
        setErrors({});
        navigate('/players/list');
      })
      .catch(err => {
        //console.log(err.response.data);
        const errorResponse = err.response.data.errors;
        const errorArr = {}; 
        for (const key of Object.keys(errorResponse)) { 
          errorArr[key] = errorResponse[key].message;
        }
        setErrors(errorArr);
        //console.log(errorArr);
      });
  };

  return (
    <div>
      <PlayerForm initName='' initPosition='' submitHandle={createOnePlayer} btntext={'Add Player'} Errors={Errors} />
    </div>
  );
}

export default PlayerCreate;
