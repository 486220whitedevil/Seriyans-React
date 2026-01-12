import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = () => {

  const obj = [
    {
      image:"https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      bname:'First'
    },
    {
      image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      bname: 'Second'
    },
    {
      image:"https://plus.unsplash.com/premium_photo-1661590867485-c67026a70bc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bname: 'Third'
    },
    {
      image:"https://plus.unsplash.com/premium_photo-1677368598874-dbca30c392a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      bname: 'Fourth'
    }
  ]

  return (
    <div className=' text-white h-9/10 w-2/3 px-6 rounded-2xl flex flex-row gap-4 overflow-x-auto no-scroll'>
      {obj.map((elem , index) => {
        console.log(elem)
        return <Rightcard  key={index} id={index} bname={elem.bname} image={elem.image}/>
      })}
    </div>
  )
}

export default Rightcontent
