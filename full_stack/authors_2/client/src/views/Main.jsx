import React from 'react'
import Header from './Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthorList from '../components/AuthorList'
import AuthorNew from '../components/AuthorNew'
import AuthorUpdate from '../components/AuthorUpdate'

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/author" />} />
        <Route path="/author" element={<AuthorList />} />
        <Route path="/author/new" element={<AuthorNew />} />
        <Route path="/author/:id/edit" element={<AuthorUpdate />} />
      </Routes>
    </div>
  )
}

export default Main
