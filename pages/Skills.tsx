'use client'

import React from 'react'
import { motion } from "framer-motion"
import '../app/globals.css'



const Skill = ({name, x, y}:{name:any, x:any, y:any}) => {
    return (
        
        <motion.div className='cursor-pointer absolute py-3 px-6 shadow-dark flex items-center justify-center rounded-full font-semibold bg-dark text-light'
           
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration: 1.5}}
        viewport={{once: true}}
       
       >
           {name}
       </motion.div>

    )

}



const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='cursor-pointer w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>


            <motion.div className='lg:p-6 md:p-4 xs:text-xs xs:-p-2 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:font-bold  abs p-8 shadow-dark flex items-center justify-center rounded-full font-semibold bg-dark text-light'
           
             whileHover={{scale:1.05}}
            
            >
                WEB
            </motion.div>

            <Skill name='React'   x='-25vw' y='2vw' />
            <Skill name='Nextjs'   x='-9vw' y='-1vw' />
            <Skill name='Javascript'   x='20vw' y='7vw' />
            <Skill name='Typescript'   x='0vw' y='12vw' />
            <Skill name='HTML'   x='-19vw' y='-15vw' />
            <Skill name='Nodejs'   x='15vw' y='-13vw' />
            <Skill name='CSS'   x='32vw' y='-7vw' />
            <Skill name='Tailwind CSS'   x='-25vw' y='18vw' />
            <Skill name='MySQL'   x='-25vw' y='18vw' />

        </div>

        
    </>
  )
}

export default Skills