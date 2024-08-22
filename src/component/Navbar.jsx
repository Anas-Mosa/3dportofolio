import { Link as ScrollLink } from 'react-scroll'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [toogle,settoogle] = useState(false)
  return (
    <header className='flex justify-between p-5 bg-header fixed w-full z-20 '>
    <Link to="/" className='uppercase text-xl sm:text-2xl font-extrabold text-white 'onClick={(e)=> window.scroll({top:0,behavior:"smooth"})}>anas | <span className='font-semibold title '>Dr coder</span></Link>
    <div className='relative'>
      
      <button  onClick={()=> settoogle(!toogle)} className={toogle?"hidden":'sm:hidden text-white lef-90 font-semibold text-xl'}>|||</button>
      <div   className={toogle?'flex flex-col absolute right-5 top-10 bg-card px-10 py-2 rounded-xl sm:hi':"hidden"}>
      <div className='relative'>
        <button onClick={()=> settoogle(!toogle)} className={toogle?'sm:hidden text-white lef-45 font-semibold text-4xl absolute left-16 -bottom-6 ':"hidden"}>+</button>
      </div>
      <ScrollLink onClick={()=> settoogle(!toogle)}  smooth={true} offset={-70} className ="cursor-pointer font-medium text-white  hover:text-purple-700"  to="about">About</ScrollLink>
      <ScrollLink onClick={()=> settoogle(!toogle)} smooth={true} offset={-70} className ="cursor-pointer font-medium text-white  hover:text-purple-700" to="work">Work</ScrollLink>
      <ScrollLink onClick={()=> settoogle(!toogle)} smooth={true} offset={400}className ="cursor-pointer font-medium text-white  hover:text-purple-700" to="contact">Contact</ScrollLink>
    </div>
    </div>
    
    <div className='hidden  gap-10 sm:gap-20 sm:mr-20 sm:flex mr-2'>
      <ScrollLink smooth={true} offset={-70}  className ="cursor-pointer font-medium text-white hover:text-purple-700 transition-all"to="about">About</ScrollLink>
      <ScrollLink smooth={true} offset={-70}  className ="cursor-pointer font-medium text-white hover:text-purple-700 transition-all" to="work">Work</ScrollLink>
      <ScrollLink smooth={true} offset={-70} className ="cursor-pointer font-medium text-white hover:text-purple-700 transition-all" to="contact">Contact</ScrollLink>
    </div>
    </header>
  )
}

export default Navbar