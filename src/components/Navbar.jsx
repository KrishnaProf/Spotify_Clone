import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
  return (
    <>

    <div className='w-full flex  items-center justify-between font-semibold'>
        <div className='text-white flex items-center gap-2 '>
        <img className='w-8 bg-black p-2 rounded-xl cursor-pointer' onClick = {() => navigate(-1)} src={assets.arrow_left} alt="" />
        <img className='w-8 bg-black p-2 rounded-xl cursor-pointer' onClick = {() => navigate(1)} src={assets.arrow_right} alt="" />
    </div>
    <div className='flex items-center gap-2'>
        <p className=' bg-white text-black rounded-2xl p-1 px-2 cursor-pointer'>
            Explore Premium 
        </p>
        <p className='  text-white rounded-2xl p-2 cursor-pointer'>
            Install App
        </p>
        <p className='  text-black w-7 h-7 flex items-center justify-center rounded-full bg-violet-800 p-4 cursor-pointer'>
            K
        </p>

    </div>
    

    </div>
    <div className='flex items-center gap-8 py-2 cursor-pointer'>
    <p className='text-black bg-white rounded-full p-1 px-4 '>All</p>
    <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
    <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
</div>
</>
    
  )
}

export default Navbar