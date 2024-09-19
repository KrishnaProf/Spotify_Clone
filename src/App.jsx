import { useContext } from 'react'
import './App.css'
import SIdebar from './components/SIdebar'
import Display from './components/Display'
import Player from './components/Player'
import { PlayerContext } from './context/PlayerContext'

function App() {

  const {audioRef, track} = useContext(PlayerContext)

  return (
    
    <>
      <div className="h-screen bg-black">
          <div className="h-[90%] flex">
            <SIdebar />
            <Display />
          
          </div>
          
            <Player />
            <audio ref={audioRef} src={track.file} preload="auto"></audio>
          
          
        </div>
    </>
  )
}

export default App
