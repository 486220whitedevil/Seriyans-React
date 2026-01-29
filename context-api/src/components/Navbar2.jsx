import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../contexts/ThemeContext'

const Navbar2 = () => {

    const [theme , setTheme] = useContext(ThemeDataContext)
  return (
    <div className='flex gap-5 text-2xl font-semibold'>
      <h4 className='cursor-pointer'>Home</h4>
      <h4 className='cursor-pointer'>About</h4>
      <h4 className='cursor-pointer'>Contact</h4>
      <h4 className='cursor-pointer'>Servises</h4>
      <h4 className='cursor-pointer'>{theme}</h4>
    </div>
  )
}

export default Navbar2
