import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import  {FreeMode, Pagination} from 'swiper/modules' 
import { data } from '../utils'
import { RxArrowTopRight } from 'react-icons/rx'



const ServiceSlider = () => {
  return (
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination, FreeMode]}
    className='h-[240px] sm:h-[340px]'
    >
      {
        data.serviceData.map(({icon, title, desc}, i) => (
          <SwiperSlide key={i}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6
            py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
            hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 '>

              <div className='text-4xl text-accent mb-4'>
                {icon}</div>

              <div className='mb-8'>
                <h4 className='mb-2 text-lg'>
                  {title}</h4>
                <p className='max-w-[350px] leading-normal'>
                  {desc}</p>
              </div>

              <div className='text-3xl'>
                <RxArrowTopRight
                className='group-hover:rotate-45 group group-hover:text-accent 
                transition-all duration-300'
                />
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default ServiceSlider