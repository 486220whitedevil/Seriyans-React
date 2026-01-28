import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index , setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  },[index])

  let printUserData = <h3 className='text-xl text-gray-400 absolute top-1/2 left-1/2'>loading...</h3>

  if(userData.length>0){
    printUserData = userData.map((elem , idx) => {
      return <div>
        <a href={elem.url}>
          <div className='h-60 w-70 m-3 overflow-hidden bg-white rounded-lg'>
        <img className='object-cover h-full w-full gap-3 rounded-lg' src={elem.download_url} alt="" />
      </div>
      <h1>{elem.author}</h1>
        </a>
      </div>
    })
  }
  return (
    <div className='bg-black text-white min-h-screen'>
       <div className='h-30 w-full bg-black text-white flex justify-center items-center font-bold text-5xl '>
        <h1>Gallary Photos</h1>
      </div>


      <div className='flex flex-wrap justify-center'>
        {printUserData}
      </div>

     

      <div className='flex justify-between items-center  gap-10 w-1/2 mx-auto fixed bottom-10 left-100 '>
        <button 
        onClick={() => {
          if(index>1) {
            setIndex(index-1)
            setUserData([])
          }
        }}
        className='bg-gray-800 text-white font-sm px-5 py-3 mt-10 cursor-pointer rounded-lg active:scale-95'>Prev</button>
        <h1 className='text-3xl '>Page - {index}</h1>
        <button
        onClick={() => {
          setUserData([])
          setIndex(index+1)
        }} 
        className='bg-gray-800 text-white font-sm px-5 py-3 mt-10 cursor-pointer rounded-lg active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App
