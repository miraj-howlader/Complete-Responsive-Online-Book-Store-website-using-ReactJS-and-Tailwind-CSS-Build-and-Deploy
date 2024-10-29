import React from 'react'

import BoradImg from '../assets/website/board.png'
import AppPng from '../assets/app_store.png'
import PlayPng from '../assets/play_store.png'
const AppStore = () => {
    const BgImag = {
        backgroundImage:`url(${BoradImg})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        width:'100%'
    }
  return (
    <div
    style={BgImag}
      className=' bg-gray-100 dark:bg-gray-900 dark:text-white py-10'>
      <div
      data-aos='fade-down'
       className=' container'>
        <div className=' space-y-6 max-w-xl mx-auto'>
            <h1 className=' text-2xl text-center sm:text-4xl
             font-semibold text-white'>Read Books at your fingertips</h1>
             <div className=' mt-4 flex flex-col lg:flex-row justify-center items-center
              gap-5'>
                <a href="#">
                    <img src={AppPng} alt="" className='
                     max-w-[150px] sm:max-w-[120px] md:max-w-[200px] 
                     ' />
                </a>
                <a href="#">
                    <img src={PlayPng} alt="" className='
                     max-w-[150px] sm:max-w-[120px] md:max-w-[200px] 
                     ' />
                </a>
             </div>
        </div>
      </div>
    </div>
  )
}

export default AppStore
