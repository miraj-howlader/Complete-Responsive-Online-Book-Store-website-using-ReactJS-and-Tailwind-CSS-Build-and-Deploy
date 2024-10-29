import React from 'react'
import Slider from 'react-slick';

const TestimonialData = [
    {
        id:1,
        name:'vector',
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem aliquid hic praesentium iusto ducimus minus dolorem cum pariatur doloremque! Quae?",
        img:'https://picsum.photos/200/300'
    },
    {
        id:2,
        name:'John',
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem aliquid hic praesentium iusto ducimus minus dolorem cum pariatur doloremque! Quae?",
        img:'https://picsum.photos/300/300'
    },
    {
        id:3,
        name:'Smith',
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem aliquid hic praesentium iusto ducimus minus dolorem cum pariatur doloremque! Quae?",
        img:'https://picsum.photos/400/400'
    },
    {
        id:4,
        name:'Mike',
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem aliquid hic praesentium iusto ducimus minus dolorem cum pariatur doloremque! Quae?",
        img:'https://picsum.photos/200/500'
    },
    {
        id:5,
        name:'Jelen',
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem aliquid hic praesentium iusto ducimus minus dolorem cum pariatur doloremque! Quae?",
        img:'https://picsum.photos/300/200'
    },
    {
        id:6,
        name:'Jack',
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem aliquid hic praesentium iusto ducimus minus dolorem cum pariatur doloremque! Quae?",
        img:'https://picsum.photos/200/300'
    },
    {
        id:7,
        name:'Patt',
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem aliquid hic praesentium iusto ducimus minus dolorem cum pariatur doloremque! Quae?",
        img:'https://picsum.photos/200/300'
    },
]
const Testimonial = () => {
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:'linear',
        pauseOnHover:true,
        pauseOnFocus:true,
      };
  return (
    <div className=' pb-10'>
        <div className=' container'>
              {/* header section  */}
              <div
              data-aos='fade-right'
               className=' text-center mb-20 max-w-[400px] mx-auto
            '>
                <p className=' text-sm bg-clip-text text-transparent
                 bg-gradient-to-r from-primary to-secondary'>What our
                  customer says</p>
                <h1 className=' text-3xl font-bold'>Testimonials</h1>
                <p className=' text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam hic eligendi modi aliquam?</p>
            </div>
            {/* Card section  */}
            <div >
              <Slider {...settings} >
                {
                    TestimonialData.map((item)=>(
                        <div
                        data-aos="flip-right"
                         key={item.id}>
                            <div className=' justify-center items-center text-center flex flex-col gap-4 shadow-lg
                             py-8 px-6 mx-4 rounded-xl dark:bg-gray-900
                              bg-primary/10 relative'>
                                <div>
                                    <img src={item.img} alt="" 
                                    className=' rounded-full w-20 h-20
                                     object-cover'
                                    />
                                </div>
                                <div>
                                    <div>
                                        <p className=' text-gray-500
                                         text-sm max-w-[550px]'>{item.text}</p>
                                        <h1 className=' text-xl font-bold
                                         text-black/80
                                          dark:text-white'>{item.name}</h1>
                                    </div>

                                </div>
                                <p className=' absolute text-black/20 z-10
                             top-0 text-white right-20 font-serif text-9xl'>,,</p>
                            </div>
                          
                        </div>
                    ))
                }
              </Slider>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonial
