import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestBooks from './components/BestBooks'
import Banner from './components/Banner'
import AppStore from './components/AppStore'
import AllBooks from './components/AllBooks'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Popup from './components/Popup'

const App = () => {
  const [orderPopup,setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  useEffect(() => {
    Aos.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100,
    });
    Aos.refresh();
  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
     duration-300'>
     <Navbar handleOrderPopup={handleOrderPopup}/>
     <Hero handleOrderPopup={handleOrderPopup}/>
     <BestBooks handleOrderPopup={handleOrderPopup}/>
     <Banner/>
     <AppStore/>
     <AllBooks/>
     <Testimonial/>
     <Footer/>
     <Popup handleOrderPopup={handleOrderPopup}
     orderPopup={orderPopup}/>
     
    </div>
  )
}

export default App
