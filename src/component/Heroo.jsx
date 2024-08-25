/* eslint-disable no-unused-vars */
import {React,useEffect,useState} from 'react'
import Computer from './Computer';
function Heroo() {
  
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {

const mediaQuery = window.matchMedia('(max-width: 500px)');

setIsMobile(mediaQuery.matches);

const handleMediaQueryChange = (event) => {
setIsMobile(event.matches)}

mediaQuery.addEventListener('change',
handleMediaQueryChange);

return () =>
mediaQuery.removeEventListener('change',
handleMediaQueryChange);
}, [])
  
  
  
  
  return (
  <>
      <img src={"src/assets/herobg.png"} alt="img" className='absolute bg-center bg-cover w-full h-screen z-0' />
      <section className='relative w-full h-screen'>
      
        <div className='absolute top-32 flex gap-5 ml-16 '>
          
          <div className='flex flex-col justify-center items-center'>
            <div className='h-4 w-4 bg-title rounded-full animate-bounce'></div>
            <div className=' sm:h-80 h-40 w-1 bg-title rounded-b-full'></div>
          </div>
          
          
          <div>
            <h1 className='font-extrabold text-white sm:text-7xl text-5xl'>Hi,I'm <span className='title'>Anas</span></h1>
            <p className='text-white font-semibold sm:text-3xl mt-6 text-xl'>I develop 3D visuals,User interfaces and web applications</p>
          </div>
      
        </div>
      
      <div className='z-10 absolute bottom-10 w-full flex justify-center items-center'>
        <div className='border-white border-2 w-5 h-12 rounded-full mx-auto cursor-pointer' onClick={(e)=> window.scroll({top:window.innerHeight,behavior:'smooth'})}>
        <div className='w-3 h-3 rounded-full bg-white m-auto animation'> </div>
        </div>
        
      </div>
      <Computer isMobile={isMobile}/>
      </section>
    
  </>
  )
}

export default Heroo