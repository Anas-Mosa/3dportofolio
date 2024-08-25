import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { textVariant } from "assets/constant/motion";

import "react-vertical-timeline-component/style.min.css";


import { experiences } from "assets/constant/data";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1f1229",
        color: "#fff",
        
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>}>
       
      <div className="px-5">
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider px-2'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="about">
      <motion.div variants={textVariant()} className="sm:mx-24 mt-24 mx-5">
        <p className={` font-mono text-white mb-2`}>
          What I have done so far
        </p>
        <h2 className={` text-white font-arial text-5xl sm:text-6xl font-extrabold mb-5`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col sm:mx-16'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};


export default Experience