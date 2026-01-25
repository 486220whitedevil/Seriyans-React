import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const user = JSON.parse(localStorage.getItem('userdetails'))
 console.log(user);
 
 
  return (
    <>
    <h1>This is Deepak</h1>
    </>
  )
}

export default App
