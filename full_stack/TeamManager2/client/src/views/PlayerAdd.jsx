import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PlayerForm from '../components/PlayerForm';
import axios from 'axios';

const PlayerAdd = ({ bold = [false, false] }) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate() ;
  const playerAdd = (newPlayer) => {
    axios.post('http://localhost:8000/api/players', newPlayer)
      .then((res) => {
        setErrors({});
        console.log(res)
        navigate('/players/list')
        })
      .catch((err) => {
        const errorsObject = err.response.data.errors;
        const errorMessages = {};
        for (let key of Object.keys(errorsObject)) {
          errorMessages[key] = errorsObject[key].message;
        }
        setErrors(errorMessages);
      });
  };

  return (
    <div className=' border border-dark mx-3 my-3 w-75 d-flex flex-column aligns-items-center'>

    <div className='d-flex mx-3 my-2 p-4 justify-content-start'>
       <h3><Link className={bold[0] ? 'fw-bold' : ''} to="/players/list">List</Link>  </h3> 
      <h3 className='mx-2'>|</h3>
      <h3>
      <Link className={bold[1] ? 'fw-bold' : ''} to="/players/add"> Add Player </Link> 
      </h3>
    </div>
      
    <div className='m-5'>
        <PlayerForm
          text="Add"
          onPlayerAdd={playerAdd}
          errors={errors}
          initialName=""
          initialPosition=""
        />
      </div>

    </div>
   
  );
};

export default PlayerAdd;
