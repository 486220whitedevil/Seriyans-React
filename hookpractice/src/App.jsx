import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  let increase = () => {
    setCount(count+1)
  }

  let decrease = () => {
    setCount(count-1)
  }

  let maxIncrease = () => {
    let sr = {...count}
    sr = count+5
    setCount(sr)
  }

  let maxDecrease = () => {
    let sr = {...count}
    sr = count-5
    setCount(sr)
  }

  return (
    <div className='min-h-screen w-full bg-gray-950 p-10 flex justify-center flex-col'>
      <div className='h-100 w-100 bg-gray-600 rounded-4xl mx-auto flex justify-center items-center '>
        <h1 className='text-white font-bold text-8xl'>{count}</h1>
      </div>
      <div className='h-10 w-100 p-5  text-white flex justify-between items-center mt-15 mx-auto'>
        <button onClick={increase} className='bg-gray-800 px-5 py-2 rounded-4xl cursor-pointer hover:bg-amber-600'>Increase</button>
        <button onClick={decrease} className='bg-gray-800 px-5 py-2 rounded-4xl cursor-pointer hover:bg-amber-600'>Decrease</button>
      </div>
      <div className='h-10 w-100 p-5  text-white flex justify-between items-center mt-15 mx-auto'>
        <button onClick={maxIncrease} className='bg-gray-800 px-5 py-2 rounded-4xl cursor-pointer hover:bg-amber-600'>Decrease by 5</button>
        <button onClick={maxDecrease} className='bg-gray-800 px-5 py-2 rounded-4xl cursor-pointer hover:bg-amber-600'>Increase by 5</button>
      </div>
    </div>
  )
}

export default App
