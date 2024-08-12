import React from 'react'
import Header from '../components/Header'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Routes>
      <Route path="/author" element={<Header url="/author/new" textUrl="Add new Author"  text="We have quotes By:" />} /> 
       <Route path="/" element={<Header url="/author/new" textUrl="Add new Author"  text="We have quotes By:" />} /> 
         
        
        </Routes>  
    </div>
  )
}

export default Main
