import { ArrowRight } from 'lucide-react'
const Rightcard = ({ bname, image , id}) => {
  return (
    <div className='relative h-9/10 w-1/3 shrink-0 bg-white my-8 
      rounded-4xl 
      overflow-hidden
    '>

      {/* Image */}
      <img
        className='w-full h-160 object-cover'
        src={image}
        alt="Card"
      />

      {/* Gradient Overlay (HALF DARK) */}
      <div className='
        absolute 
        inset-0 
        bg-gradient-to-t 
        from-black/100 
        via-black/40 
        to-transparent
        z-10
      ' />
      <div className='h-10 w-10 rounded-full bg-blue-700 text-white absolute top-10 left-10 flex justify-center items-center'>{id+1}
      </div>

      {/* Content (TOP LAYER) */}
      <div className='
        absolute 
        bottom-5 
        left-0 
        right-0 
        z-20 
        px-5
      '>
        
        <h1 className='text-white mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quasi aliquid accusamus quidem accusantium tenetur suscipit laborum non aliquam laboriosam, nemo error enim
        </h1>

        <div className='flex justify-between'>
          <button className='
          bg-blue-800 
          text-white 
          font-semibold 
          px-7 
          py-3 
          rounded-2xl
        '>
            {bname}
          </button>
          <div className='h-10 w-10 bg-blue-700 flex justify-center items-center rounded-full'>
            <ArrowRight size={30} color='white' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Rightcard
