'use client'

import React from 'react'
import { motion } from "framer-motion"


const Skill = ({name, x, y}) => {
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
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='cursor-pointer w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>


            <motion.div className='abs p-8 shadow-dark flex items-center justify-center rounded-full font-semibold bg-dark text-light'
           
             whileHover={{scale:1.05}}
            
            >
                WEB
            </motion.div>

            <Skill name='React'   x='-25vw' y='2vw' />
            <Skill name='Nextjs'   x='-5vw' y='-1vw' />
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