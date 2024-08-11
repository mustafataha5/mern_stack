import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const PeopleList = ({people,removePerson}) => {
   //console.log(">>>>>>>"+people.l);
   const deletePerson = (id)=>{
        axios.delete("http://localhost:8000/api/people/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err)) ; 
        removePerson(id) ; 
   }
  return (
    <div>
       {people && people.map( (person, i) =>
                <div>
                <p key={i}>{person.lastName}, {person.firstName}</p>
                <Link to={"/people/"+person._id}>edit</Link>|
                <button onClick={() => deletePerson(person._id)}> Delete</button>
                </div>
            )}
    </div>
  )
}

export default PeopleList
