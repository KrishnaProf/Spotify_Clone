import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'


const SongsItem = ({image, name, desc,id}) => {

 const {playwithId} = useContext(PlayerContext);

  return (
    <div onClick={() => playwithId(id)}>
        <img className='w-[300px]' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-sm text-slate-200'>{desc}</p>
    </div>
  )
}

export default SongsItem