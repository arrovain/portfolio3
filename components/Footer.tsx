import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span
            > {new Date().getFullYear()} </span>
            <div  className='flex items-center underline underline-offset-2'>
            Build With Nextjs</div>
            
          
            <Link className='underline underline-offset-2' href='https://mahmuticme.vercel.app/'>Another Portolio</Link>
        </Layout>
    </footer>
  )
}

export default Footer