import React, {useContext} from 'react'
import { albumsData, assets, songsData } from '../assets/assets';
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext';



const DisplayAlbum = () => {
  const {id} = useParams();
  const albumData = albumsData[id];

  const {playwithId} = useContext(PlayerContext);


  return (
    <div>

      <Navbar />

      <div className='flex'>
        <img className='w-48 rounded ' src={albumData.image} alt="" />
        <div className='p-8 '>
          <p>Playlist</p>
          <h1 className='text-6xl font-bold m-2'>{albumData.name}</h1>
          <p className="mt-1">
            <img
              className="inline-block w-5 "
              src={assets.spotify_logo}
              alt=""
            />
            <b> Spotify</b>. 1,324,23 likes . <b>50 songs, </b>
            about 2 hr 30 mins
          </p>
          </div>


        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2'>
          <p><b className="mr-4">#</b> Title</p>
          <p>Album</p>
          <p className='hidden sm:block'>Date Added</p>
          <img className='w-4 m-auto' src={assets.clock_icon} alt=""/>
        </div>
        <hr />
        {songsData.map((song,index) => (
          <div key={index} onClick={() => playwithId(song.id)}
               className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                <p className='text-white flex'>
                  <b className='mr-4 text-{#a7a7a7]'>{index+1}</b>
                  <img className='w-14  px-2' src={song.image} alt="" />
                  {song.name}
                  </p>
                  <p className="text-[15px]">{albumData.name}</p>
                  <p className="text-[15px] hidden sm:block">5 days ago</p>
                  <p className="text-[15px] text-center">{song.duration}</p>
            </div>
        ))}


      </div>


      
   
  )
}

export default DisplayAlbum