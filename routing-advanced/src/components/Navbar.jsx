import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='h-20 w-full bg-gray-900 flex justify-between px-10 items-center text-2xl'>
      <h1 className='font-bold'>Deepak kewat</h1>
      <div className='flex gap-10 '>
        <Link to='/' className='active:scale-95'>Home</Link>
        <Link to='/contact' className='active:scale-95'>Contact</Link>
        <Link to='/about' className='active:scale-95'>About</Link>
        <Link to='/courses' className='active:scale-95'>Courses</Link>
        <Link to='/product' className='active:scale-95'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
