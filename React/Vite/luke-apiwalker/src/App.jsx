import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './style.css'
import Form from './components/Form'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import People from './components/People'
import Planets from './components/Planets'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [menu, setSetMenu] = useState([])
  const [result, setResult] = useState();
  const navigate = useNavigate()


  const initial = useRef(true)
  useEffect(() => {
    if (initial.current) {
      axios.get('https://swapi.dev/api/')
        .then(res => setSetMenu(Object.keys(res.data)))
        .catch(err => console.log(err));
       
      initial.current = false;
    }
  }, [])

  // const searchApi = (qurey) => {

  //   axios.get('https://swapi.dev/api'+qurey)
  //     .then(res => {
  //       setResult(res.data); 
  //       navigate(qurey);
  //     })
  //     .catch(err => {console.log("------------"+err)
  //           setResult(undefined) ;
  //           navigate(qurey)
  //         });

  // }


  return (
    <>

      <Form menu={menu} ></Form>
        <div className='d-flex flex-column justify-content-center align-items-center'>
      <Routes>
          <Route path="/" element={<></>}></Route>
          
            <Route path="/people/:id" element={<People ></People>}></Route>
            <Route path="/planets/:id" element={<Planets  ></Planets>}></Route>
            <Route path="/films/:id" element={<ErrorMessage></ErrorMessage>}></Route>
            <Route path="/spaceships/:id" element={<ErrorMessage></ErrorMessage>}></Route>
            <Route path="/vehicles/:id" element={<ErrorMessage></ErrorMessage>}></Route>
            <Route path="/species/:id" element={<ErrorMessage></ErrorMessage>}></Route>
           
      </Routes>
        </div>
    </>
  )
}

export default App
