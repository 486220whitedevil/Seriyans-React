import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = () => {
  return (
    <div className='py-10 px-10 bg-gray-900 h-screen gap-10 flex justify-between'>
      <Leftcontent/>
      <Rightcontent />
    </div>
  )
}

export default Page1content
