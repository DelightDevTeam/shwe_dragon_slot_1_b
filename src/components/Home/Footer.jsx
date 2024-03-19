import React from 'react';
import home from '../../assets/img/footerIcons/home.png';
import promo from '../../assets/img/footerIcons/promo.png';
import livechat from '../../assets/img/footerIcons/livechat.png';
import wallet from '../../assets/img/footerIcons/wallet.png';
import history from '../../assets/img/history.png';
import summary from '../../assets/img/summary.png';

import profile from '../../assets/img/footerIcons/account.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const footerIcons = [
    { img: home, title: 'Home', link: '/' },
    { img: promo, title: 'Promotion', link: '/promotion' },
    { img: history, title: 'History', link: '/history' },
    { img: summary, title: 'Game Log', link: '/game-log' },
  ];
  return (
    <footer 
    className='rounded-top-5 px-3 px-sm-5 py-3 fixed-bottom d-flex align-items-center justify-content-between mt-5 shadow-lg'>
      {footerIcons.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.link}
            className='text-light d-flex flex-column text-center align-align-items-center text-decoration-none'
          >
            <img
              src={item.img}
              className='footerImg mx-auto'
              alt={item.title}
            />
            <span className='footerTitle'>{item.title}</span>
          </NavLink>
        );
      })}
    </footer>
  );
};

export default Footer;
