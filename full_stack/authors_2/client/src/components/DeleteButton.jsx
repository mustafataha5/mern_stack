import React from 'react'

const DeleteButton = ({delFunction}) => {


  return (
    <div>
        <button onClick={delFunction} className='btn btn-danger btn-sm'>Delete</button>     
    </div>
  )
}
export default DeleteButton
