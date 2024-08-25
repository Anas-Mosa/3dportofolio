/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import {React,useRef,forwardRef} from "react";
import { motion } from "framer-motion";
import { services } from "assets/constant/data";
import { fadeIn, textVariant } from "assets/constant/motion";
import WebDeveloper from "assets/WebDeveloper.png"
import frontendDeveloper from "assets/frontendDeveloper.png"
import _3Ddeveloper from "assets/_3Ddeveloper.png"
import logodesigner from "assets/logodesigner.png"

const ServiceCard = ({ index, title,img }) => (

  <div className=''>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='bg-gradient-to-b hover:from-pink-500 hover:to-green-500 lef-5 from-green-500 to-pink-500 h-72 w-64 rounded-3xl flex justify-center items-center'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-card rounded-3xl py-5 px-12 w-99 h-99 flex justify-evenly items-center flex-col '
      >
        <img
          src= {img}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />



        <h3 className='text-white text-2xl font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About =() => {
  
  return (
    <section    className="sm:mx-24 mt-24 mx-5">
      <motion.div  variants={textVariant()}>
        <p className="font-mono text-white mb-2">Introduction</p>
        <h2 className=" text-white font-arial text-5xl sm:text-6xl font-extrabold mb-5">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-2xl max-w-3xl leading-relaxed '
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-row flex-wrap gap-10'>
  <ServiceCard title="Web Developer" img={WebDeveloper}/>
  <ServiceCard title="frontend Developer" img={frontendDeveloper}/>
  <ServiceCard title="3D developer" img={_3Ddeveloper}/>
  <ServiceCard title="logo designer" img={logodesigner}/>
</div>
    </section>
  );
}

export default About