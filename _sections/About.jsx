import React, { useState } from "react"

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFirebase,
  SiFramer,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

// import Circles from "@/components/Circles";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import fadeIn from "../variants";
import Image from "next/image";


//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { name: "html", icon: < FaHtml5 /> },
          { name: "css", icon: < FaCss3 /> },
          { name: "javascript", icon: < FaJs /> },
          { name: "react", icon: < FaReact /> },
          { name: "next.js", icon: < SiNextdotjs /> },
          { name: "tailwind", icon: < SiTailwindcss /> },
          { name: "Bootstrap", icon: < FaBootstrap /> },
          { name: "firebase", icon: < SiFirebase /> },
          { name: "node.js", icon: < FaNodeJs /> },
          { name: "express.js", icon: < SiExpress /> },
          { name: "mongodb", icon: < SiMongodb /> },
          { name: "git", icon: < FaGitAlt /> },
          { name: "framer", icon: < SiFramer /> },
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Saylani Devathon Summit 1.0",
        stage: "Nov-4-2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer Intern - Saylani Mass IT Training",
        stage: "2022 - 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Intermediate in CS - Govt. Dehli College Karachi, Pakistan",
        stage: "2022",
      },
      {
        title: "Web Development - Saylani Mass IT Training Institute Karachi, Pakistan",
        stage: "2023",
      },
      {
        title: "Certified javascript Developer - Saylani Mass IT Training Institute Karachi, Pakistan",
        stage: "2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div id="about" className="h-screen text-center xl:text-left relative">
      {/* circle */}
      <div className="w-[200px] xl:w-[300px] absolute -right-16 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10 overflow-hidden">
        <Image src={'/circles.png'} width={260} height={200} alt="" className="w-full h-full" />
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center xl:flex-row gap-x-6 pt-16 md:mt-0 md:pt-0">
        {/* text */}
        <div className="flex-1  flex flex-col justify-center  xs:mt-[3.5rem]">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2">
            Captivating <span className="text-accent">Stories</span> birth magnificent designs.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] text-[14px] mx-auto xl:mx-0 mb-2 mt-2 xl:mb-12 xl:px-0 px-2">Dedicated Front End Developer with 2+ year of experience.
            Proficient in crafting responsive layouts, implementing UI/UX designs, and applying best web development practices. Demonstrated ability to work with diverse technologies and frameworks. Adaptable and driven, excelling in dynamic, fast-paced environments. .
          </motion.p>

          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              {/* clients */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={null} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
              </div> */}
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Wining awards</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[380px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex}
                  className={`${index === itemIndex && "text-accent after:w-[100%] after:bg-[#f13024] after:transition-all after:duration-300"}
                  cursor-pointer capitalize xl:text-2xl relative after:w-8 after:h-[2px] after:bg-white after:transition-all after:duration-300
                  after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}>{item.title}</div>
              )
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4  items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/90">
                  {/* title */}
                  <div className="xl:text-[1.1rem]">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="xl:px-0 px-6 flex gap-x-4 gap-y-5 flex-wrap ">
                    {item.icons?.map((item, index) => {
                      return (
                        <div key={index} className="relative flex item-center group hover:text-accent transition-all duration-300">
                          {/* tooltip */}
                          <div className="absolute  bottom-8 -right-2 hidden xl:group-hover:flex">
                            <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[5px]">
                              <div className="text-[12px] leading-none uppercase font-semibold">{item.name}</div>
                            </div>
                          </div>
                          <div className="text-2xl">{item.icon}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
