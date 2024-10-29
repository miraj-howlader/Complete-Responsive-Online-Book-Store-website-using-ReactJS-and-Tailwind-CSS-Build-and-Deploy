import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobile, FaYoutube } from 'react-icons/fa'

const FooterLink = [
    {
        title:'Home',
        link:'/#'
    },
    {
        title:'About',
        link:'/#about'
    },
    {
        title:'Contact',
        link:'/#contact'
    },
    {
        title:'Blog',
        link:'/#blog'
    },
]
const Footer = () => {
  return (
    <div className=' bg-gray-100 dark:bg-gray-900 dark:text-white'>
      <div className="container">
        <div className=' grid md:grid-cols-3 py-5'>
            {/* Company details  */}
            <div className=' py-8 px-4'>
                <h1 className=' sm:text-3xl text-xl font-bold sm:text-left
                 text-justify mb-3'>Book Store</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum quo tenetur error molestiae!</p>
                 <br />
                 <div className=' flex items-center gap-3'>
                    
                    <FaLocationArrow/>
                    <p>Noida, Uttar Pradesh</p>
                   
                 </div>
                 <div className=' flex items-center gap-3'>
                    <FaMobile/>
                    <p>++ 089 48543 9445</p>
                 </div>
                 <div className=' flex items-center gap-3 mt-6'>
                    <a href="#" className=' rounded-full hover:bg-orange-600
                     transition-all duration-300'>
                        <FaInstagram className=' text-3xl'/>
                    </a>
                    <a href="#">
                        <FaFacebook className=' text-3xl'/>
                    </a>
                    <a href="#">
                        <FaYoutube className=' text-3xl'/>
                    </a>
                    <a href="#">
                        <FaLinkedin className=' text-3xl'/>
                    </a>
                 </div>
            </div>
            {/* Link section  */}
            <div className=' grid grid-cols-2 sm:grid-cols-3 col-span-2
             md:pl-10'>
                <div>
                    <div className=' py-8 px-4'>
                        <h1 className=' text-xl font-bold sm:text-left
                         text-justify mb-3'>Important Links</h1>
                        <ul className=' flex flex-col gap-3'>
                            {
                                FooterLink.map((item) => (
                                    <li className=' cursor-pointer hover:translate-x-1
                                     duration-300 hover:text-primary
                                      space-x-1 text-gray-500'>
                                        <span>&#11162;</span>
                                        <span>{item.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className=' py-8 px-4'>
                        <h1 className=' text-xl font-bold sm:text-left
                         text-justify mb-3'>Important Links</h1>
                        <ul className=' flex flex-col gap-3'>
                            {
                                FooterLink.map((item) => (
                                    <li className=' cursor-pointer hover:translate-x-1
                                     duration-300 hover:text-primary
                                      space-x-1 text-gray-500'>
                                        <span>&#11162;</span>
                                        <span>{item.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className=' py-8 px-4'>
                        <h1 className=' text-xl font-bold sm:text-left
                         text-justify mb-3'>Important Links</h1>
                        <ul className=' flex flex-col gap-3'>
                            {
                                FooterLink.map((item) => (
                                    <li className=' cursor-pointer hover:translate-x-1
                                     duration-300 hover:text-primary
                                      space-x-1 text-gray-500'>
                                        <span>&#11162;</span>
                                        <span>{item.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>

        </div>
        {/* copyright section  */}
        <div>
            <hr />
            <div className=' border-t-2 border-gray-300/50'>
                <p className=' text-center py-10'>Copyright &copy; 2024. All rights reserved.
                    || Made with 💔 by Miraj Howlader
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
