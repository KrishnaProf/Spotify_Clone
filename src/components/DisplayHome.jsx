import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import SongsItem from './SongsItem'

const DisplayHome = () => {
  return (
    <div>
        <Navbar />
        <div className='mb-2' >
        <p className='text-2xl font-bold mb-4'>Featured Charts</p>
        <div className='flex overflow-auto gap-2'>
        {albumsData.map((album,index) => (
            <Albumitem key={index} image={album.image} name={album.name} desc={album.desc} id={album.id}/>

        ))}
        </div>

</div>


<div className="mb-4">
<h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
<div className="flex overflow-auto gap-2">
    {songsData.map((song,index) => (
        <SongsItem key={index} image={song.image} name={song.name} desc={song.desc} id={song.id} />
    ))}
</div>
        
    </div>
    </div>
  )
}

export default DisplayHome