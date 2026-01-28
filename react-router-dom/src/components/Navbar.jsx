import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 w-full bg-gray-900 flex justify-between items-center px-10 text-white font-bold text-2xl'>
      <h2>Deepak kewat</h2>

      <div className='flex gap-6'>
       <Link to='/'>Home</Link>
       <Link to='/contact'>Contact</Link>
       <Link to='/about'>About</Link>
       <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
