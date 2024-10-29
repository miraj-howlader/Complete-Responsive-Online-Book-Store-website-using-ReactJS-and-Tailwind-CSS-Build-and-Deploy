import React from 'react'

import LibraryImg from '../assets/website/library.jpg'
import { GrSecure } from 'react-icons/gr'
const Banner = () => {
  return (
    <>
    <div className=' py-10'>
    <div className=' container'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 items-center'>
            {/* image section  */}
            <div>
                <img
                data-aos='fade-left'
                 src={LibraryImg} alt="" 
                className=' max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-sm-[
                -10px_10px_12px_rgb(0,0,0,0.1)] object-cover'/>
            </div>
            {/* text section  */}
            <div
            data-aos='zoom-in'
            data-aos-duration='500'
             className=' flex flex-col justify-center gap-6
             sm:pt-0'>
            <h1 className=' text-3xl sm:text-4xl font-bold'>Library at Your fingertips</h1>
            <p className=' text-sm text-gray-500
             tracking-wide leading-5 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus Quam doloribus suscipit enim aliquam, ab voluptatibus itaque neque.</p>
            <div className=' flex flex-col gap-4'>
                <div className=' flex items-center gap-4'>
                    <GrSecure className='text-5xl bg-gray-400
                     rounded-full px-2 py-2 
                      duration-300'/>
                      <p>Quality Books</p>
                </div>
                <div className=' flex items-center gap-4'>
                    <GrSecure className='text-5xl bg-green-500
                     rounded-full px-2 py-2 
                      duration-300'/>
                      <p>Fast Delivery</p>
                </div>
                <div className=' flex items-center gap-4'>
                    <GrSecure className='text-5xl bg-yellow-500
                     rounded-full px-2 py-2 
                      duration-300'/>
                      <p>Easy Payment method</p>
                </div>
                <div className=' flex items-center gap-4'>
                    <GrSecure className='text-5xl 
                     rounded-full px-2 py-2 bg-primary
                      duration-300'/>
                      <p>Get offers on books</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
      
    </>
  )
}

export default Banner
