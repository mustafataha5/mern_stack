import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState("")

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            // console.log(response);
            setData(response.results) ;
        }).catch(err=>{
            console.log(err);
        });

  }
  return (
    <>
      <button className='btn btn-primary' onClick={fetchPokemon}> Fetch Pokemon</button>
      <ul>
      { data.length > 0 ? <p> Length of data : {data.length}</p > : ""}  
      { data.length > 0 && data.map( (poke,i) =>  <li key={i} >{poke.name}</li>)}

      </ul>
    </>
  )
}

export default App
