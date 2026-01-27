import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [num , setNum] = useState(0)

  useEffect(() => {
    console.log("This is running");
    
  },[])

  return (
    <>
    <h1>{num}</h1>
      <button onClick={() => {
        setNum(num+1)
      }}>Click</button>
    </>
  )
}

export default App
