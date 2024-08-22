import React from 'react'
import { technologies } from "../assets/constant/data";
import BallCanvas from './Ball';
const Tech =()=> {
  return (
  
      <div className='sm:ml-10 sm:mr-5 mt-28 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
        <BallCanvas icon={technology.icon}/>
        </div>
        ))}
      </div>
  
  )
}

export default Tech