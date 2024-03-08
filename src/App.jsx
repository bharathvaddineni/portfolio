/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App