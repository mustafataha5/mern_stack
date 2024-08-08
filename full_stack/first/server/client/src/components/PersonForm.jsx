import axios from 'axios';
import React, { useState } from 'react'

const PersonForm = ({newPerson}) => {

    const [firstName,setFirstName] = useState("") ; 
    const [lastName,setLastName] = useState("") ; 

    const submitHandle = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people',{firstName,lastName})
        .then(res => {console.log(res.data)
                 newPerson();
                })
        .catch(err => console.log(err)) ;

        setFirstName('') ; 
        setLastName('') ; 
    }

  return (
    <div>
        <form onSubmit={submitHandle}>
            <p>
                <label htmlFor="">FirstName: </label>
                <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            </p>
            <p>
                <label htmlFor="">LastName: </label>
                <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
            </p>
            <p> <input type="submit" value="Add Person" /></p>
        </form>
    </div>
  )
}

export default PersonForm
