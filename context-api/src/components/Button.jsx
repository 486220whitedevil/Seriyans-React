import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../contexts/ThemeContext'

const Button = () => {
   const [theme,  setTheme] =  useContext(ThemeDataContext)

   const changeTheme = () => {
    setTheme('dark')
   }
  return (
    <div >
      <button 
      className='px-4 py-2 rounded-lg  text-white m-2 bg-gray-500 cursor-pointer active:scale-95'
      onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
