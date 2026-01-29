import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChildNav = () => {
    const navigate = useNavigate()
  return (
    <div className='h-15 bg-gray-800 w-full '>
      <button 
      onClick={() => {
        navigate('/')
      }}
      className='px-5 py-2 rounded-lg font-bold m-2 bg-gray-500 text-white cursor-pointer active:scale-95'>Return back to Home page</button>
      <button 
      onClick={() => {
        navigate(-1)
      }}
      className='px-5 py-2 rounded-lg font-bold m-2 bg-gray-500 text-white cursor-pointer active:scale-95'>Back</button>
      <button 
      onClick={() => {
        navigate(+1)
      }}
      className='px-5 py-2 rounded-lg font-bold m-2 bg-gray-500 text-white cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default ChildNav
