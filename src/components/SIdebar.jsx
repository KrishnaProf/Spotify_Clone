import {useNavigate} from 'react-router-dom'
import {assets} from '../assets/assets'

const SIdebar = () => {

  const navigate = useNavigate();

  return (
    <div className='width-[25%] h-full p-2 flex-col gap-2 text-white'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={() => navigate("/")} className='flex items-center gap-3 pl-8 cursor-pointer'>
               <img className="w-6 " src={assets.home_icon} alt="" />
               <p className="font-bold ">Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
               <img className="w-6 " src={assets.search_icon} alt="" />
               <p className="font-bold ">Search</p>
            </div>
        </div>
        
          <div className='bg-[#121212] h-[10%] rounded flex items-center gap-3 pl-8 pr-4 my-2 cursor-pointer '>
          <div className='flex items-center gap-3 '>
          <img className="w-6" src={assets.stack_icon} alt="" />
          <p className="font-semibold">Your Library</p>

          </div>
          <div className='flex items-center gap-3 pl-20 '>
            <img className='w-6' src={assets.arrow_icon} alt="" />
            <img className='w-6' src={assets.plus_icon} alt="" />
          </div>
          
        </div>
        <div className='bg-[#242424] h-[25%] rounded py-2 px-4'>
            <p className='font-bold '>Create Your First Playlist</p>
            <p className='text-sm'>It's easy we will help you</p>
            <button className='bg-white rounded-full px-3 py-1 m-5 text-black '>Create PlayList</button>
          </div>

          <div className='bg-[#242424] h-[25%] rounded py-2 px-4 my-3'>
            <p className='font-bold '>Let's find some podcasts to follow</p>
            <p className='text-sm'>We will keep you update on new episodes</p>
            <button className='bg-white rounded-full px-3 py-1 m-5 text-black '>Browse Podcasts</button>
          </div>
        
    </div>
  )
}

export default SIdebar