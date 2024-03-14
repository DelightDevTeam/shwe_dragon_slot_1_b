import React from 'react';
import home from '../../assets/img/footerIcons/home.png';
import promo from '../../assets/img/footerIcons/promo.png';
import livechat from '../../assets/img/footerIcons/livechat.png';
import wallet from '../../assets/img/footerIcons/wallet.png';
import profile from '../../assets/img/footerIcons/account.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const footerIcons = [
    { img: home, title: 'Home', link: '/' },
    { img: promo, title: 'Promotion', link: '/promotion' },
    { img: wallet, title: 'Deposit', link: '/deposit' },
    { img: profile, title: 'Profile', link: '/profile' },
  ];
  return (
    <footer className=' rounded-top-5 px-3 px-sm-5 py-3 fixed-bottom   z-3 d-flex  align-items-center justify-content-between  '>
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
