"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/navigation'
import { GithubIcon, LinkedInIcon } from './Icons';
import {motion} from 'framer-motion'
import Main from '../pages/Main';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';





const CustomLink = ({href, title, className="" }) => {
  
const router = useRouter();

  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
    <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )}

 
const CustomMobileLink = ({ href, title, className="", toggle }) => {
  
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }
  
    return(
      <button href={href} className={`${className} relative group text-light`} onClick={handleClick}>
        {title}
  <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} `}>&nbsp;</span>
      </button>
    )} 


const Navbar = () => {
  

  const [isOpen, setIsOpen] = useState(false);
  
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  
  
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>


    <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>

      <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${ isOpen ? 'rotate-45 translate-y-1' : '-translete-y-0.5'}`}> </span>
      <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${ isOpen ? 'opacity-0' : 'opacity-100'}`}>  </span>
      <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${ isOpen ? '-rotate-45 -translate-y-1' : '-translete-y-0.5'}`}>  </span>
    </button>
       
    <div className='w-full flex justify-between items-center lg:hidden'>
      <nav className=''>
        
        <CustomLink href="/Main" title='Home' className='mr-4'></CustomLink>
        <CustomLink href="/Skills" title='Skills' className='mx-4'></CustomLink>
        <CustomLink href="/Projects"  title='Projects' className='ml-4'></CustomLink>
       
     
      </nav>
      
      </div>

   <div className=''>
   <nav className='flex items-center justify-center'>
      
      <motion.a href="https://github.com/arrovain" target='__blank' whileHover={{y: -2}}
      whileTap={{scale:0.9}}
      className='w-6 mr-3'>
      <GithubIcon/>
      </motion.a>
      <motion.a href="https://www.linkedin.com/in/mahmuticme/" target='__blank' whileHover={{y: -2}}
       whileTap={{scale:0.9}}
      className='w-6 ml-3'>
      <LinkedInIcon/>
      </motion.a>
    </nav>
    {
      isOpen ? 
      <div className='bg-dark/90 rounded-lg backdrop-blur-md py-32 min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2'>
      <nav className='flex items-center flex-col justify-center'>
        
        <CustomMobileLink href="/Main" title='Home' className='mr-4' toggle={handleClick}></CustomMobileLink>
        <CustomMobileLink href="/Skills" title='Skills' className='mx-4'  toggle={handleClick}></CustomMobileLink>
        <CustomMobileLink href="/Projects"  title='Projects' className='ml-4'  toggle={handleClick}></CustomMobileLink>
       
     
      </nav>
      <nav className='flex items-center justify-center'>
      
      <motion.a href="https://github.com/arrovain" target='__blank' whileHover={{y: -2}}
      whileTap={{scale:0.9}}
      className='w-6 mr-3'>
      <GithubIcon/>
      </motion.a>
      <motion.a href="https://www.linkedin.com/in/mahmuticme/" target='__blank' whileHover={{y: -2}}
       whileTap={{scale:0.9}}
      className='w-6 ml-3'>
      <LinkedInIcon/>
      </motion.a>
    </nav>
    </div> : null
    }
      
  
   
   
    
    <div className='absolute left-[50%] top-2 translate-x-[-50%]' >
      <Logo/>

   </div>
     

</div>
      </header>


  )
}

export default Navbar