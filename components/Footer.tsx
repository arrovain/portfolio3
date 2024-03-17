import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='sm:text-base w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <div className=' underline underline-offset-2 '
            > {new Date().getFullYear()} </div>
            <div  className='flex items-center underline underline-offset-2 lg:py-2'>
            Build With Nextjs</div>
            
          
            <div className='underline underline-offset-2' >Mahmut İÇME</div>
        </Layout>
    </footer>
  )
}

export default Footer