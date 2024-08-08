import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePerson = () => {

    const [firstName,setFirstName] = useState("") ;
    const [lastName,setLastName] = useState("") ; 
    const {id} =useParams();
    const navgiate = useNavigate() ; 
    useEffect(()=>{
        axios.get("http://localhost:8000/api/people/"+id)
        .then(res => {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
        })
    },[])

    const  submitHandle = (e) =>{
        e.preventDefault() ; 

        axios.patch("http://localhost:8000/api/people/"+id,{firstName,lastName})
        .then( res =>{ console.log(res)
           navgiate(-1) ; 
        })
        .catch(err => console.log(err)) ; 
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

export default UpdatePerson
