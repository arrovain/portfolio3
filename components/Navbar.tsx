"use client";
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/navigation'
import { GithubIcon, LinkedInIcon } from './Icons';
import {motion} from 'framer-motion'
import Main from './Main';
import Skills from '../pages/Skills';
import Projects from './Projects';





const CustomLink = ({href, title, className="" }) => {
  
const router = useRouter();

  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
<span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )}


const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
       
      <nav className=''>
        
        <CustomLink href="/Main" title='Home' className='mr-4'></CustomLink>
        <CustomLink href="/Skills" title='Skills' className='mx-4'></CustomLink>
        <CustomLink href="/Projects"  title='Projects' className='ml-4'></CustomLink>
       
     
      </nav>
      

   
      <nav className='flex items-center justify-center flex-wrap'>
      
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
    
     
     
      
      <div className='absolute left-[50%] top-2 translate-x-[-50%]' >
        <Logo/>

</div>
      </header>


  )
}

export default Navbar