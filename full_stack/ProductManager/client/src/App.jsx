import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'
import Main from './views/Main'
import { Route, Routes, useNavigate ,Link} from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import ProductEdit from './components/ProductEdit'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  

  return (
    <>
    
   
    <Routes>
    <Route path='/'  element={ <Link to="/products"> To Products</Link>}></Route>
      <Route path='/products'  element={<Main/>}></Route>
     <Route path='/products/:id' element={<ProductDetails/>}></Route>
     <Route path='/products/:id/edit' element={<ProductEdit/>}></Route>
    </Routes>
    </>
  )
}

export default App
