import React from 'react'
import useFetch from '../../hooks/useFetch'
import BASE_URL from '../../hooks/baseURL'

const Marquee = () => {
  const {data: bannerText} = useFetch(BASE_URL+'/bannerText');
  // console.log(bannerText.text);
  return (
    <div>
      <marquee className='p-2 shadow-lg   text-light rounded-2 m-2 border border-warning '>
          {bannerText && bannerText.text}
      </marquee>
    </div>
  )
}

export default Marquee
