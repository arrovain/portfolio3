import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import profilePic from '../public/images/profile/developer-pic-1.png'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '../components/Icons'
import '../app/globals.css'



const Main = () => {
  return (
    <main className="flex items-center text-dark w-full min-h-screen" >
    <Layout className="pt-0">
      <div className="div flex items-center justifiy-between w-full">
        <div className="w-1/2">
          <Image src={profilePic} alt='s' className='w-full h-auto'
          priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center">
          <h1>
            <AnimatedText text='Turning Vision Into Reality With Code And Design.' className="!text-6xl !text-left"  />

            <p className=" my-4 text-base font-medium">
             As a skilled front-end developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects, showcasing my expertise in React.js and web development.

            </p>
            <div className="flex items-center self-start mt-2 ">
              <Link href='/resume.pdf' target={"__blank"}
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark "
              download={true}>Resume
              <LinkArrow className={"w-6 ml-1"}></LinkArrow></Link>
              <Link href='mailto:arrovain@gmail.com' target={"__blank"}
              className="ml-4 text-lg font-medium capitalize text-dark underline">Contact</Link>
            </div>
          </h1>
        </div>
      </div>
    </Layout>

    



  </main>
  )
}

export default Main