import React, { useEffect, useRef, useState } from 'react'
import InnerHeadre from '../views/InnerHeadre'
import PlayerForm from './PlayerForm'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PlayerUpdate = () => {
    const [player, setPlayer] = useState();
    const loaded = useRef(false);
    const { id } = useParams()
    const[Errors,setErrors] = useState({}) ;
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/players/" + id)
            .then(res => {
                // console.log(res);
                setPlayer(res.data.player);
                loaded.current = true;
                setErrors({});
            })
            .catch(err => {
                console.log(err);

            });
    }, [])


    const UpdateOnePlayer = (updatedPlayer) => {
        axios.patch("http://localhost:8000/api/players/" + id, updatedPlayer)
            .then(res => {
                // console.log(res);
                setPlayer(res.data.player);
                setErrors({});
                navigate('/players/list');
            })
            .catch(err => {
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorArr = {};
                for (const key of Object.keys(errorResponse)) {
                    errorArr[key] = errorResponse[key].message;
                }
                setErrors(errorArr);
                console.log(errorArr);
            });

    }

    if (loaded.current == false) {
        return (<div>
            <InnerHeadre >
                <p>Loading...</p>
            </InnerHeadre>
        </div>
        )
    }

    return (
        <div>
            <PlayerForm initName={player.name} initPosition={player.position} submitHandle={UpdateOnePlayer} btntext={'Edit Player'}  Errors={Errors} />
        </div>
    )
}

export default PlayerUpdate
