import React, { useRef, useState } from 'react'
import EarthCanvas from './Earth'
import StarsCanvas from './Stars'
import Navbar from './Navbar'
import emailJs from "@emailjs/browser"
function Contact() {
  const formRef= useRef()
  const [loading,setloading] =useState(false)
  const [form,setform] =useState({
    name:"",
    email:"",
    message:""
  })
  const handleChange=(e)=>{
  const {name,value} = e.target
  setform({...form,[name]:value})
  }
  const handleSumbit=(e)=>{
  e.preventDefault()
  setloading(true)
  emailJs.send("service_1e64jzh","template_i12gk3a",
    {from_name:form.name,
      to_name:form.name,
      from_email:form.email,
      to_email:"ansm759@gmail.com",
      message:form.message
    },"AtCcJCFwlVxOqQX4f"
  ).then(()=>{
   setloading(false)
   alert("Thank you,I will get back to you as soon as possible")
   setform({
    name:"",
    email:"",
    message:""})

  }),(error)=>{
    console.log(error);
   alert("Something went wrong")
    setloading(false)
  }
    }
  

  return ( 
    <section id='contact' className=' relative'>
        
      

      <div className='sm:mx-24  mx-5  flex flex-wrap-reverse sm:justify-start sm:gap-40  sm:items-center  w-full gap-10  '>
      
      <form onSubmit={handleSumbit} ref={formRef} className='bg-card w-96 p-5 rounded-2xl z-10 mb-16 mt-32'>
      <div>
        <p className="font-mono text-white mb-2">GET IT TOUCH</p>
        <h2 className=" text-white font-arial text-5xl sm:text-6xl font-extrabold mb-5">Contact.</h2>
      </div>

        <label className='flex flex-col'>
          <span className='text-white mb-2 '>Your Name</span>
          <input onChange={handleChange} name='name' value={form.name} className='bg-input h-10 border-none outline-none text-white px-2 rounded-md' type="text" placeholder="What's your good name?" />
        </label>

        <label className='flex flex-col'>
          <span className='text-white mb-2 '>Your email</span>
          <input onChange={handleChange} name='email' value={form.email} className='bg-input h-10 border-none outline-none text-white px-2 rounded-md '  type="text" placeholder="What's your email address?"/>
        </label>

        <label className='flex flex-col'>
          <span className='text-white mb-2 '>Your Message</span>
          <textarea onChange={handleChange} name='message' value={form.message} className='bg-input border-none outline-none text-white px-2 rounded-md' rows={7} type="text" placeholder="What's your web address?"/>
        </label>
        <button className='text-white bg-input px-6 py-2 rounded-3xl mt-4 font-semibold'>{loading?"sending...":"send"}</button>
        </form>
      
      
      
      
      <div className='z-10 mt-5 sm:w-96 sm:h-96 w-80 h-80 flex justify-center items-center '>
        <EarthCanvas/>
      </div>
    </div>
    <StarsCanvas/>
    </section>
  )
}

export default Contact