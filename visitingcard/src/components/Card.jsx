import React from 'react'

const Card = () => {
  return (
    <div className='w-80 h-100 bg-black rounded-lg text-white border-2 border-white p-4' >
      <div className='h-40 w-40 bg-black rounded-full border-2 border-white mx-auto'>
        <img 
        className='h-40 w-40 rounded-full '
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb2Dn_G8xASQ7BUkvuedGcVufo-jyVKuOnYQ&s" alt="image" />
      </div>
      <h1 className='font-semibold text-center mt-4 text-2xl'>Deepak Kewat</h1>
      <p className=' text-center mt-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, error.</p>
      <button className='bg-white text-black p-2 block mx-auto mt-4 rounded-2xl'>View Profile</button>
    </div>
  )
}

export default Card
