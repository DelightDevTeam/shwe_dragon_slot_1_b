import React from 'react';
import Carousel from '../components/Home/Carousel';
//import Marquee from '../components/Home/Marquee';
import PlayerInfo from '../components/Home/PlayerInfo';
import HomeTabs from '../components/Home/HomeTabs';
import '../assets/css/marquee.css';

const Home = () => {
  return (
    <div className='container main'>
      <div className='row mt-2'>
        <div className='col-12'>
          <Carousel />
        </div>
      </div>
      {/* empty row to move HomeTabs below */}
      <div className='space-mb'></div>
      <div className='row'>
        <div className='col-12'>
          <HomeTabs />
        </div>
      </div>
    </div>
  );
};

{
  /* <div className='px-2 px-sm-5'>
        <Carousel />
        <div className='marquee-space'>
          <Marquee />
        </div>
        <HomeTabs />
      </div>; */
}

export default Home;
