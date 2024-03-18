import React from 'react';
import b1 from '../../assets/img/banner1.png';
import b2 from '../../assets/img/banner2.png';
import b3 from '../../assets/img/banner3.png';
import b4 from '../../assets/img/banner4.png';
import b6 from '../../assets/img/banner6.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../assets/css/carousel.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useFetch from '../../hooks/useFetch';
import BASE_URL from '../../hooks/baseURL';
import Marquee from './Marquee';

const Carousel = () => {
  const { data: banners } = useFetch(BASE_URL + '/banner');
  // const banners=[b1,b2,b3,b4,b6];
  return (
    <Swiper
      className='mySwiper'
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
      {banners &&
        banners.map((banner, i) => {
          return (
            <SwiperSlide key={i}>
              <img className='bannerImg' src={banner.img_url} />
            </SwiperSlide>
          );
        })}
      <div className='row'>
        <div className='col-12'>
          <Marquee />
        </div>
      </div>
    </Swiper>
  );
};

export default Carousel;
