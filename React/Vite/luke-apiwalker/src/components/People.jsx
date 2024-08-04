
import React, { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage'
import axios from 'axios';
import Planets from './Planets';
import { Link, useParams } from 'react-router-dom';

const People = () => {
   
    const [result,setResult] = useState() ;
    const [loading, setLoading] = useState(true);
     const [peopleFrom,setPeopleFrom] = useState('');
    const {id} = useParams() ; 
    useEffect( ()=>{
      axios.get('https://swapi.dev/api/people/'+id) 
      .then(res => {setResult(res.data); 
                    setLoading(false) ; 
      })
      .catch(err => {console.log("------------<<<<<"+err)
            setResult(undefined) ;
            setLoading(false) ; 
            //navigate(qurey)
          });

    },[id])
    useEffect(()=>{
      if(result!==undefined){
        axios.get(result.homeworld)
        .then(res => setPeopleFrom(res.data))
        .catch(err => console.log(err))
      }
    },[])
  
    if (loading) {
      return <div>Loading...</div>; // You can replace this with a spinner or a more styled loading component
  }

  if (result===undefined) {
      return <ErrorMessage />;
  }

  return (
      <div>
          <h2>{result.name}</h2>
          <p><b>Height:</b> {result.height}</p>
          <p><b>Mass:</b> {result.mass}</p>
          <p><b>Hair Color:</b> {result.hair_color}</p>
          <p><b>Skin Color:</b> {result.skin_color}</p>
          <div>
              <h4>From Planet: <Link to={`/planets/${result.homeworld.split('/').at(-2)}`}>Go to Planet</Link></h4>
              {/* <Planets result={peopleFrom} /> */}
          </div>
      </div>
  );
}

export default People

