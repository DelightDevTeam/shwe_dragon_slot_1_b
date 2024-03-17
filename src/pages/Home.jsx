import React from 'react'
import Carousel from '../components/Home/Carousel'
import Marquee from '../components/Home/Marquee'
import PlayerInfo from '../components/Home/PlayerInfo'
import HomeTabs from '../components/Home/HomeTabs'

const Home = () => {
  return (
    <div className='px-2 px-sm-5'>
      <Marquee />
      <Carousel />

      <HomeTabs />
    </div>
  )
}

export default Home
