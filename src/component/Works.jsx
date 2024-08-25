import {useRef} from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "assets/constant/motion";
import { projects } from "assets/constant/data";




const ProjectsCard = ({ index,name,description,tags,image,source_code_link }) => (
  <div className=''>
    
      <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      
    >
      
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-card rounded-xl h-80 w-72 flex p-4 flex-col lef-5 relative '
      >
        <img
          src= {image}
          alt='web-development'
          className='w-72 h-40 rounded-2xl '
        />
        <div onClick={()=>window.open(source_code_link,"_blank")} className='absolute black-gradient w-8 h-8 right-5 top-5 rounded-full flex justify-center items-center cursor-pointer'>
          <img src={"/src/assets/github.png"} alt="github" className='w-5 h-5 '/>
        </div>


        <h3 className='text-white text-xl my-2 font-bold '>
          {name}
        </h3>
        <p className='gray text-xs font'>{description}</p>
        <div className='flex font-semibold gap-2 my-2'>
          {tags.map((tag)=>(
          <p key={tag.name} className={`${tag.color}`}>#{tag.name}</p>
        ))}
        </div>
        
      </div>
    </motion.div>
  </div>
);


const Works = ()=> {
  const worksRef= useRef()

  return (
    <section id='work' className='sm:mx-24 mt-24 mx-5'>
    <motion.div variants={textVariant} className="">
        <p className={` font-mono text-white mb-2`}>
          My Work
        </p>
        <h2 className={` text-white font-arial text-5xl sm:text-6xl font-extrabold mb-5`}>
          Projects.
        </h2>
      </motion.div>
      <p className='mt-4 text-white text-2xl max-w-3xl leading-relaxed '>Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.</p>

          <div className='flex gap-10 mt-20 flex-wrap'>
          {projects.map((project,index)=>(
          <ProjectsCard key={index} {...project} index={index}/>
        ))}
          </div>
          
    </section>
  )
}

export default Works