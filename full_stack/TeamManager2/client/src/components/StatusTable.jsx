import React from 'react'
import GameButton from './GameButton'

const StatusTable = ({players}) => {
  return (
    <div>
      <table className='table table-bordered border-dark text-center'>
        <thead>
            <tr>
                <th>Name</th>
                <th className='w-75' >Status</th>
            </tr>
        </thead>
        <tbody>
            {players && players.map((player,i)=>{
                return (
                    <tr key={i}>
                        <td>{player.player.name}</td>
                        <td> <GameButton 
                        id={player.player._id}
                        gameId={player.game}
                        status={player.status} /> </td>
                    </tr>
                )
            })}
        </tbody>

      </table>
    </div>
  )
}

export default StatusTable
      