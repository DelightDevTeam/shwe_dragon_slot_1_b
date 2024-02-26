import React from 'react'
import b1 from '../../assets/img/banner1.png'
import b2 from '../../assets/img/banner2.png'
import b3 from '../../assets/img/banner3.png'
import b4 from '../../assets/img/banner4.png'
import b6 from '../../assets/img/banner6.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
    const banners=[b1,b2,b3,b4,b6];
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
  >
    {banners.map((banner,i)=>{
        return  <SwiperSlide key={i}>
            <img className='bannerImg' src={banner} />
        </SwiperSlide>

    })}
  </Swiper>
  )
}

export default Carousel
