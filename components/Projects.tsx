import Head from 'next/head'
import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from './Icons'
import project1 from '../public/images/projects/crypto-screener-cover-image.jpg';


const FeaturedProject = ({ type, title, summary, img, link, github}) =>{
  return ( 
   
    


  <article className='rounded-br-4xl top-0 -right-3 -z-10 w-[101%] h[103%] rounded-[2rem] bg-dark w-full flex items-center justify-center relative  border border-solid border-dark bg-light p-12 shadow-2xl'>
 
  
  
  <Link href={link} target='__blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>

     <Image src={img} alt={title} className='w-full h-auto'/>

  </Link>
  <div className='w-1/2 flex flex-col items-center justify-between pl-6 gap-1'>
    <span className='text-primary font-medium text-xl'>{type}</span>
    <Link href={link} target='__blank' className='hover:underline underline-offset-2'>
      <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
    </Link>
    <p>{summary}</p>
  
    <div className='mt-2 flex items-center'>
      <Link href={github} target='__blank' className='w-9'><GithubIcon/></Link>
      <Link href={link} target='__blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
        Visit Live </Link>
    
    </div>
  </div>

</article>)
};

const Projects = () => {
  return (
    <>

    <Head>
        <title>Mahmut İÇME | Projects Page</title>
        <meta name="description" content='description' />



    </Head>

    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text='My Projects
            ' />
          <div className=' grid grid-cols-16 gap-24'>
            <div className=' col-span-12
            '><FeaturedProject  title='portfolio' img={project1} summary='this is portfolio' link='/' github='/' type='Featured Project'  />
             
             <FeaturedProject  title='portfolio' img={project1} summary='this is portfolio' link='/' github='/' type='Featured Project'  />
             <FeaturedProject title='proje2' img={project1} summary='this is proje2' link='/' github='/'/>

            </div>
          
            
          </div>

          
        </Layout>
    </main>
    </>
  )
}

export default Projects