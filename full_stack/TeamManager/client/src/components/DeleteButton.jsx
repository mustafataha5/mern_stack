import React from 'react'

const DeleteButton = ({deletePlayer}) => {


  return (
    <div>
      <button className='btn btn-danger btn-sm' onClick={deletePlayer}> Delete </button>
    </div>
  )
}

export default DeleteButton
