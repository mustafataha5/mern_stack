import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PeopleList from '../components/PeopleList';
const Main = () => {

  const [people,setPeople] = useState([]) ; 
  const [index,setIndex]= useState(0) ; 
  const [load ,setLoad] = useState(false) ; 

//     const[message,setMessage] = useState("Loading...")
  
  useEffect(() => {
    axios.get("http://localhost:8000/api/people")
    .then(res => {
        setPeople(res.data.users);
        setLoad(true) ; 
        })
    .catch(err => console.log(err)) 
},[index])

  const addPerson = (newPersonObject)=>{
      axios.post('http://localhost:8000/api/people',newPersonObject)
        .then(res => {
                console.log(res.data)
                setPeople([...people,res.data]) ;  
                })
        .catch(err => console.log(err)) ;
  }
 const removePerson =(id)=>{
     setPeople(people.filter(person => person._id != id)); 
 } ; 
  
//  const newPerson =()=>{
//     setIndex(index+1) ; 
// } ; 
    return (
    <div>
      <PersonForm onSubmitProp={addPerson}  initalFirstName="" initalLastName=""/>
      {load && <PeopleList people={people} removePerson={removePerson}   />}
    </div>
  )
}

export default Main
