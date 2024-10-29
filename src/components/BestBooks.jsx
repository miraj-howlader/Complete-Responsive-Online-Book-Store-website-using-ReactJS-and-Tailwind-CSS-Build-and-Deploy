import React from 'react'
import Book1  from '../assets/books/book2.jpg'
import Book2  from '../assets/books/book1.jpg'
import Book3  from '../assets/books/book3.jpg'
import { FaStar } from 'react-icons/fa'
const BookData = [
    {
        id:1,
        img:Book1,
        title:'His Life  ',
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
const BestBooks = ({handleOrderPopup}) => {
  return (
    <>
    <div className=' my-10 dark:bg-gray-900 dark:text-white'>
        <div className=' container mt-6'>
            {/* header section  */}
            <div
            data-aos='fade-right'
             className=' text-center mb-20 max-w-[400px] mx-auto
            '>
                <p className=' text-sm bg-clip-text text-transparent
                 bg-gradient-to-r from-primary to-secondary'>Trending Books</p>
                <h1 className=' text-3xl font-bold'>Best Books</h1>
                <p className=' text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam hic eligendi modi aliquam?</p>
            </div>
          {/* Card section  */}
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
           md:gap-5 gap-[60px] place-items-center'>
            {
                BookData.map((item)=>(
                    <div
                    data-aos='zoom-in'
                    data-aos-once='true'
                     key={item.id} className=' rounded-2xl bg-white
                     dark:bg-gray-800  hover:bg-primary dark:hover:bg-primary
                      hover:text-white relative shadow-xl duration-300
                       group max-w-[300px]'>
                        <div className=' h-[100px]'>
                            <img src={item.img} alt="" 
                            className=' max-w-[100px] block mx-auto transform
                             -translate-y-14 group-hover:scale-105
                              duration-300 shadow-md'
                            />
                        </div>
                       
                        <div className=' flex '>
                            <div className=' w-full flex p-4 flex-col items-center
                             justify-center'>
                               <div className=' flex'>
                               <FaStar className=' text-yellow-500'/>
                                <FaStar className=' text-yellow-500'/>
                                <FaStar className=' text-yellow-500'/>
                                <FaStar className=' text-yellow-500'/>
                                <FaStar className=' text-yellow-500'/>
                               </div>
                            <h1 className=' text-xl font-bold'>{item.title}</h1>
                            <p className=' text-gray-500
                             group-hover:text-white duration-500
                              text-sm line-clamp-2'>{item.desc}</p>
                            <button
                            onClick={handleOrderPopup}
                             className='btn'>Order now</button>
                            </div>
                        </div>
                    </div>
                    
                ))
            }
          </div>
        </div>
    </div>
      
    </>
  )
}

export default BestBooks
