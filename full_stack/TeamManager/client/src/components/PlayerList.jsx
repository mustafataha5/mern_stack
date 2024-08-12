import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import InnerHeadre from '../views/InnerHeadre'
import axios from 'axios'
import DeleteButton from './DeleteButton'

const PlayerList = () => {
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

    const deletePlayer = (id,name) => {
        let text = `Are you sure you want to remove [ ${name} ] `;
        if(!confirm(text)){
            return ; 
        }
        axios.delete("http://localhost:8000/api/players/" + id)
            .then(res => {
                console.log(res.data.player)
                setPlayerList(playerList.filter(player => player._id!=id));
            })
            .catch(err => console.log(err));
    }


    if (loaded.current == false) {
        return (<div>
            <InnerHeadre >
                <p>Loading...</p>
            </InnerHeadre>
        </div>
        )
    }
    else {
        return (
            <div>
                <InnerHeadre >
                    <table className='my-5 table table-sm text-center table-bordered border-primary'>
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Prefer Position</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                playerList.length > 0 && playerList.map((player, index) => {
                                    return (<tr key={index}>
                                        <td> <Link to={"/players/"+player._id}>{player.name}</Link> </td>
                                        <td>{player.position}</td>
                                        <td><DeleteButton deletePlayer={() => deletePlayer(player._id,player.name)} /></td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </InnerHeadre>
            </div>
        )
    }
}

export default PlayerList
