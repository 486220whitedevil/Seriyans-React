import { FaRegBookmark } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className='w-80 h-70 bg-white rounded-3xl p-5 shadow-md'>
      
      {/* Header */}
      <div className='flex items-center justify-between'>
        <img 
          src={props.logo} 
          className='h-10 w-10 rounded-full border border-gray-300' 
          alt="company"
        />
        <button className='flex items-center gap-2 text-sm text-gray-600 hover:text-black cursor-pointer'>
          Save <FaRegBookmark />
        </button>
      </div>

      {/* Body */}
      <div className='mt-6'>
        <h3 className='text-sm font-medium text-gray-600'>
          {props.company} <span className='ml-2 text-xs text-gray-400'>{props.time}</span>
        </h3>

        <h2 className='mt-2 text-lg font-semibold text-gray-900'>
          {props.post}
        </h2>

        {/* Tags */}
        <div className='flex gap-2 mt-3'>
          <span className='px-3 py-1 text-xs font-medium bg-gray-100 rounded-full'>
            Part Time
          </span>
          <span className='px-3 py-1 text-xs font-medium bg-gray-100 rounded-full'>
            Full Time
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className='flex items-center justify-between mt-6'>
        <h2 className='text-lg font-bold'>{props.pay}<span className='text-sm font-medium'></span></h2>
        <button className='px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 cursor-pointer'>
          Apply Now
        </button>
      </div>

    </div>
  )
}

export default Card

