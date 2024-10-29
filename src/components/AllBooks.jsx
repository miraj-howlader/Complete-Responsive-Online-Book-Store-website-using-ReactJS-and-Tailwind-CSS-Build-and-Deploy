import React from 'react'
import Book1  from '../assets/books/book2.jpg'
import Book2  from '../assets/books/book1.jpg'
import Book3  from '../assets/books/book3.jpg'
import { FaStar } from 'react-icons/fa'
const BooksData = [
    {
        id:1,
        img:Book1,
        title:'Who is there',
        rating:5.6,
        author:'Smith'
    },
    {
        id:2,
        img:Book2,
        title:'His Life',
        rating:6.6,
        author:'John'
    },
    {
        id:3,
        img:Book3,
        title:'Lost boys',
        rating:5.6,
        author:'Michel'
    },
    {
        id:4,
        img:Book2,
        title:'Lost boys',
        rating:5.6,
        author:'Smith'
    },
    {
        id:5,
        img:Book1,
        title:'Who is there',
        rating:8.6,
        author:'Stack'
    }
]
const AllBooks = () => {
  return (
    <>
    <div className=' py-10'>
        <div className=' container'>
           {/* header section  */}
           <div
           data-aos='fade-up'
            className=' text-center mb-20 max-w-[400px] mx-auto
            '>
                <p className=' text-sm bg-clip-text text-transparent
                 bg-gradient-to-r from-primary to-secondary'>Best Books</p>
                <h1 className=' text-3xl font-bold'>Top Books</h1>
                <p className=' text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam hic eligendi modi aliquam?</p>
            </div>
            {/* card section  */}
            <div>
              <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
               lg:grid-cols-5 place-items-center gap-5'>
                {
                    BooksData.map((item)=>(
                        <div
                        data-aos="flip-left"
                        data-aos-duration='400'
                         key={item.id}
                        className=' shadow-lg px-4 py-2 hover:bg-primary
                         hover:text-white transition-all duration-300
                          rounded-md'
                        >
                            <img src={item.img} alt="" 
                            className=' h-[220px] w-[150px] object-cover
                             rounded-md'/>
                             <div>
                                <h2 className=' mt-3 font-semibold'>{item.title}</h2>
                               <p className='  text-sm text-gray-400'>{item.author}</p>
                             <div className=' flex items-center gap-1'>
                                <FaStar className=' text-yellow-500'/>
                                <FaStar className=' text-yellow-500'/>
                                <FaStar className=' text-yellow-500'/>
                                <span>{item.rating}</span>
                             </div>
                             </div>
                        </div>
                    ))
                }
              </div>
              <div
              data-aos='zoom-in'
               className=' flex justify-center mt-8'>
                <button className='btn'>View All books</button>
              </div>
            </div>

        </div>
    </div>
      
    </>
  )
}

export default AllBooks
