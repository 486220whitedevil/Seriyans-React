import React from 'react'
import Navbar2 from './Navbar2'
import { useContext } from 'react'
import { ThemeDataContext } from '../contexts/ThemeContext'



const Navbar = () => {
   const data =  useContext(ThemeDataContext)
  return (
    <div className='px-10 py-6 bg-gray-600 text-white flex justify-between items-center'>
      <h1 className='text-4xl font-bold'>Deepak kewat</h1>
      <Navbar2/>
    </div>
  )
}

export default Navbar
