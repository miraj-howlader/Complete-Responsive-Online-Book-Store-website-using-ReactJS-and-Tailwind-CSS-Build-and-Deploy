import React, { useState } from 'react'

import Logo from '../assets/website/logo.png'
import { FaCaretDown } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'
import { MdMenu } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import MobileNav from './MobileNav'
const Menu = [
    {
        id:1,
        name:"Home",
        link:'#'
    },
    {
        id:2,
        name:"Best Seller",
        link:'/#services'
    }
]
const DropDownLInks = [
    {
        name:'Trending Books',
        link:'/#'
    },
    {
        name:'Best Selling',
        link:'/'
    },
    {
        name:"Author",
        link:'/#'
    }
]
const Navbar = ({handleOrderPopup}) => {
    const [menuNav,setMenuNav] = useState(false)
  return (
    <div  className=' shadow-lg dark:bg-gray-900 dark:text-white
     duration-300'>
        <div className=' container py-3 sm:py-0'>
            <div className="flex  justify-between items-center">
              {/* Logo  */}
              <div className=' flex font-extrabold text-2xl sm:text-3xl
               gap-2 '>
                <a href="#" className=' flex'>
                <img src={Logo} alt=""
                className=' w-10'
                 />
                Books
                </a>
              </div>
              {/* Menu Section  */}
              <div className=' flex items-center justify-between
               gap-4 font-semibold'>
                <div>
                    <DarkMode/>
                </div>
                <ul className=' items-center gap-4 hidden sm:flex'>
                    {Menu.map((item)=>(
                        <li key={item.id}>
                            <a href={item.link}
                            className=' inline-block py-4 px-4
                             hover:text-primary transition-all duration-200'
                            >{item.name}</a>
                        </li>
                    ))}
                    {/* DropDown links  */}
                    <li className=' group relative cursor-pointer'>
                        <a href="/#"
                        className=' flex h-[72px] items-center gap-2'
                        >
                        Quick Links
                        <span>
                            <FaCaretDown className=' transition-all
                             duration-300 group-hover:rotate-180'/>
                        </span>
                        </a>
                         {/* DropDownLink section  */}
                    <div className=' absolute -left-9 z-[10] hidden
                      group-hover:block w-[150px] shadow-md text-black bg-white p-2'>
                        <ul>
                            {DropDownLInks.map((item)=>(
                                 <li key={item.link}>
                                    <a href={item.link}
                                    className=' inline-block w-full
                                     rounded-md p-2 hover:bg-primary/20'
                                    >{item.name}</a>
                                 </li>
                            ))}
                        </ul>
                    </div>
                    </li>
                   
                </ul>
                <button
                onClick={handleOrderPopup}
                 className=' bg-gradient-to-r from-primary
                 to-secondary text-white px-4 py-1 rounded-full
                  flex items-center gap-3'>
                    Order Now
                    <FaCartShopping
                     className=' text-xl text-white drop-shadow-sm
                      cursor-pointer'
                    />
                    </button>
              </div>
                {/* Menu  */}
              <div className=' lg:hidden relative'>
                {
                    menuNav ?<RxCross2
                    onClick={() => setMenuNav(!menuNav)}
                     className=' text-3xl cursor-pointer'/>
                    :<MdMenu
                    onClick={() => setMenuNav(!menuNav)}
                     className=' text-3xl cursor-pointer'/>
                }
                 
                 
              </div>
            </div>
        </div>
        <MobileNav menuNav={menuNav}/>
    </div>
  )
}

export default Navbar
