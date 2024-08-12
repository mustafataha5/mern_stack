import React, { useState } from 'react'
import InnerHeadre from '../views/InnerHeadre'


const PlayerForm = ({initName,initPosition,submitHandle,Errors,btntext}) => {

  const [name, setName] = useState(initName);
  const [position, setPosition] = useState(initPosition);
  
  const submitForm = (e) => {
    e.preventDefault();
    submitHandle({name,position}) ; 
  }

  return (
    <div>
      <InnerHeadre >
        {/* {Errors && Object.keys(Errors).map(key => <p>{Errors[key]}</p>)} */}
        <div className='row d-flex justify-content-center'>
          <div className='col-8'>
            <div className='card border-light'>
              <div className='card-body'>
                <form onSubmit={submitForm} >

                  <table className='my-5 table table-sm  '>
                    <thead>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='text-end'><label htmlFor="">Player Name:</label></td>
                        <td><input className='w-100' type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td> </td>
                        <td> <small className='text-danger' >{Errors['name']}</small> </td>
                      </tr>
                      <tr>
                        <td className='text-end'><label htmlFor="">Prefred Position:</label></td>
                        <td><input className='w-100' type="text" value={position} onChange={(e) => setPosition(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td> </td>
                        <td> <small className='font-size-sm text-danger ' >{Errors['position']}</small> </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className='text-start'><button className=' btn btn-info'>{btntext}</button></td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>

      </InnerHeadre>
    </div>
  )
}

export default PlayerForm
