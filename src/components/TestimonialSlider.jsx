

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import  {Navigation, Pagination} from 'swiper/modules' 
import { data } from '../utils'
import { FaQuoteLeft } from 'react-icons/fa'



const TestimonialSlider = () => {
  return (
    <Swiper
   spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className='h-[400px]'
    >
      {
        data.testimonialData.map(({message, image, name, position}, i) => (
          <SwiperSlide key={i}>
         <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>

          <div className='w-full h-full max-w-[300px] flex flex-col xl:justify-center items-center
          relative mx-auto xl:mx-0'>
            <div className='flex flex-col justify-center text-center'>

              <div className='mb-2 mx-auto'>
                <img 
                src={image} 
                alt={name} />
              </div>
              <p className='text-lg'>
                {name}
              </p>
              <p className='text-[12px] uppercase font-extralight tracking-widest'>
                {position}
              </p>
            </div>
          </div>
 
          <div className=' flex-1 flex flex-col justify-center items-center
           before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 
           xl:before:h-[200px] relative xl:pl-20'>
            <div className='mb-4'>
              <FaQuoteLeft
              className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'
              />
            </div>
            <p className='xl:text-lg text-center md:text-left'>
              {message}
            </p>
          </div>
         </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default TestimonialSlider