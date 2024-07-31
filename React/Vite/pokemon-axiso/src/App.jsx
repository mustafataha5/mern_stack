import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
function App() {
  const [data, setData] = useState("")

  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => {
          // console.log(response.data);
          return setData(response.data.results);
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
