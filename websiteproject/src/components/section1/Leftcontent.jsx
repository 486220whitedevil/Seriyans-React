import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const Leftcontent = () => {
  return (
    <div className='bg-gray-900 h-9/10 w-1/3 py-10 px-5 rounded-2xl text-white flex flex-col justify-between'>
      <div >
        <h1 className='text-4xl font-bold leading-10'>Prospective <br/> Customer <br/> Segmentation</h1>
        <p className='py-10 text-gray-200'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia temporibus voluptate eveniet illo quis esse nobis nostrum, atque consequatur autem suscipit provident pariatur dolores debitis harum magni numquam amet reiciendis.</p>
        </div>
      <div><ArrowUpRight size={80}/></div>
    </div>
  )
}

export default Leftcontent
