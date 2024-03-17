import React from 'react'
import useFetch from '../../hooks/useFetch'
import BASE_URL from '../../hooks/baseURL'

const Marquee = () => {
  const { data: bannerText } = useFetch(BASE_URL + '/bannerText');
  // console.log(bannerText.text);
  return (
    <div>
      <marquee className='p-2 shadow-lg rounded  text-light py-1 px-2 m-2 border border-warning '>
        {bannerText && bannerText.text}
        {!bannerText && 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis tempora cupiditate quaerat pariatur consequuntur libero a, necessitatibus rerum nemo eius voluptatibus! Voluptatum ducimus dolore alias laboriosam, accusamus harum vitae.'}
      </marquee>
    </div>
  )
}

export default Marquee
