import React, { useState } from 'react'

import Book1  from '../assets/books/book2.jpg'
import Book2  from '../assets/books/book1.jpg'
import Book3  from '../assets/books/book3.jpg'
import Vector  from '../assets/website/blue-pattern.png'

const ImageList = [
    {
        id:1,
        img:Book1,
        title:'His Life will forever be Changed ',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus.'
    },
    {
        id:2,
        img:Book2,
        title:'Who is there ',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus.'
    },
    {
        id:3,
        img:Book3,
        title:'Lost Boy ',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus.'
    },
]
const Hero = ({handleOrderPopup}) => {
    const [imageId,setImageId] = useState(Book1)
    const [title,setTitle] = useState('His Life will forever be Changed ')
    const [description,setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus.')
  
    const BgImage = {
        backgroundImage:`url(${Vector})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        width:'100%'
    }
    return (
    <>
    <div className='  min-h-[550px] sm:min-h-[650px] bg-gray-100
     justify-center flex items-center dark:bg-gray-900 dark:text-white
      duration-300'
      style={BgImage}
      >
      <div className=' mt-14 container pb-8 sm:pb-0'>
         <div className=' grid grid-cols-1 sm:grid-cols-2'>
           {/* text section  */}
           <div className=' flex flex-col justify-center gap-4 pt-12
            sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
            <h1
            data-aos='zoom-out'
            data-aos-duration='500'
             className=' text-5xl sm:text-6xl lg:text-7xl
             font-bold'>{title}
                <p
                data-aos='slide-up'
                data-aos-duration='500'
                data-aos-delay='100'
                 className=' bg-clip-text text-transparent
                 bg-gradient-to-b from-primary
                  text-right text-sm to-secondary'>by Anonymous</p>
            </h1>
            
            <p
             data-aos='slide-up'
             data-aos-duration='500'
             data-aos-delay='100'
             className=' text-sm'>{description}</p>
           <div>
            <button
            onClick={handleOrderPopup}
            data-aos='zoom-in'
             className='btn'>Order Now</button>
           </div>
           </div>
           {/* Image Section  */}
            <div className=' min-h-[450px] flex justify-center items-center
             relative order-1 sm:order-2'>
                <div className=' h-[300px] sm:h-[450px] overflow-hidden flex
                 justify-center items-center
                 '>
                    <img
                    data-aos='zoom-in'
                    data-aos-once='true'
                     src={imageId} alt="" 
                    className=' w-[300px] h-[300px] sm:h-[450px]
                     sm:w-[450px] sm:scale-125 object-contain mx-auto'
                    />
                </div>
                {/* Other image list  */}
                <div className=' flex lg:flex-col lg:top-1/2
                 lg:-translate-y-1/2 lg:py-2 justify-center gap-4
                  absolute -bottom-[40px] lg:-right-1
                   bg-white rounded-full'>
                    {
                        ImageList.map((item)=>(
                            <img
                            data-aos='zoom-in'
                            data-aos-once='true'
                             src={item.img} alt="" 
                            className=' max-w-[100px] h-[100px]
                               object-contain inline-block
                                hover:scale-110 duration-300'
                                onClick={() => {setImageId (
                                    item.id === 1 ? Book1 :
                                    item.id === 2 ? Book2 : Book3
                                )
                                setTitle(item.title)
                                setDescription(item.desc)
                            }}
                            />
                        ))
                    }
                </div>
            </div>
         </div>
      </div>
    </div>
      
    </>
  )
}

export default Hero
