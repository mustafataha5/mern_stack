import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import PersonForm from './PersonForm';

const UpdatePerson = () => {

    const [firstName,setFirstName] = useState("") ;
    const [lastName,setLastName] = useState("") ; 
    const load = useRef(false) ; 
    const {id} =useParams();
    const navgiate = useNavigate() ; 
    useEffect(()=>{
        axios.get("http://localhost:8000/api/people/"+id)
        .then(res => {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            load.current=true ; 
        })
    },[])

    const  submitHandle = (updatePersonObject) =>{
        //e.preventDefault() ; 

        axios.patch("http://localhost:8000/api/people/"+id,updatePersonObject)
        .then( res =>{ console.log(res)
           navgiate("/people") ; 
        })
        .catch(err => console.log(err)) ; 
    }

  return (
    <div>
        { 
            load.current ? <PersonForm onSubmitProp={submitHandle} initalFirstName={firstName} initalLastName={lastName} /> : "loading"
        }
    </div>
  )
}

export default UpdatePerson
