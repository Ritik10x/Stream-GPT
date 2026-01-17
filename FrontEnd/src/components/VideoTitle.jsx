import React from 'react'
import { FaPlay } from "react-icons/fa";
const VideoTitle = ({title,overview}) => {



  return (
    <div  className='pt-36 px-12 absolute text-white'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className='flex'>
        <button className='flex items-center gap-3 bg-gray-500/50  text-white text-xl py-4 px-12 rounded-lg '><FaPlay className=''/>Play</button>
        <button className='mx-2 bg-gray-500/50  text-white text-xl py-4 px-16 rounded-lg '> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
