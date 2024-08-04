import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Home = () => {
  return (
    <h1>Welcome</h1>
  )
}

const ShowData = () => {
  const {data} = useParams()
  return (
    <div>
    {
      isNaN(data) ? (<h1>The word is {data}</h1>) : (<h1>The number is  {data}</h1>)
    }
    </div>
  )
}
const ShowBgData = () => {
  const {data,color,bg} = useParams()
  return (
    <div>
        <h1 style={{color:color,background:bg}}>{data}</h1>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Link to="Home">Home</Link>
      <Routes>
        <Route path='home' element={<Home />} ></Route>
        <Route path='/:data' element={<ShowData />}> </Route>
        <Route path='/:data/:color/:bg' element={<ShowBgData />}> </Route>
      </Routes>

    </>
  )
}

export default App
