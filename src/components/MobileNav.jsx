import React from 'react'

const MobileNavData = [
    {
        id:1,
        name:'Home',
        link:'#'
    },
    {
        id:1,
        name:'Home',
        link:'#'
    },
    {
        id:1,
        name:'About',
        link:'#'
    },
    {
        id:1,
        name:'Contact',
        link:'#'
    },
    {
        id:1,
        name:'Blog',
        link:'#'
    },
]
const MobileNav = ({menuNav}) => {
  return menuNav && (
    <div className=' bg-orange-800 transition-all
     duration-300'>
        <div className=' flex items-center justify-center gap-5 mt-4'>
            <ul className=' text-white flex flex-col gap-4 px-4 py-3 transition-all
              duration-300
              '>
                {
                    MobileNavData.map((item)=>(
                        <li>
                            <a
                            className=' hover:text-gray-500 transition-all
                             duration-300
                             '
                             href={item.link}>{item.name}</a>
                        </li>
                    ))
                }

            </ul>
        </div>
      
    </div>
  )
}

export default MobileNav
