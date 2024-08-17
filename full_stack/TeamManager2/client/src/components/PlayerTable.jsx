import React from 'react'

const PlayerTable = ({players,playerDelete}) => {
    const deleteItem =(id,name)=>{
       let text= `Do want to delete the  player with Name < ${name} >`
        if(confirm(text)){
            playerDelete(id) ; 
        }
    }
  return (
    <div>
      <table className='table table-bordered border-dark m-2 w-75'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Postion</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {players && players.map((player,i) => {
              return (
                <tr key={i}>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                    <td><button onClick={()=>deleteItem(player._id,player.name)} className='btn btn-danger btn-sm'>Delete</button></td>
                </tr>
              )
            }) }
        </tbody>
      </table>
    </div>
  )
}

export default PlayerTable
