import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Modal, Table } from 'react-bootstrap';
import logo from '../../assets/img/logo1.png';
import axios from 'axios';
import BASE_URL from '../../hooks/baseURL';
import '../../assets/css/navbar.css';
import useFetch from '../../hooks/useFetch';

const AuthenticatedUserActions = ({ user, logout }) => {
  const balance = user?.balance;
  const formattedBalance =
    user && balance ? parseFloat(balance).toLocaleString() : '';

  return (
    <>
      <div>
        <NavLink to={'/profile'}>
          <i className='fa-solid fa-user text-light'></i>
        </NavLink>
        <span className=' userText fw-bold ms-1 me-1 ms-sm-2 me-sm-2'>
          ID :
        </span>
        <span className='userText'>{user?.user_name}</span>
      </div>
      <div className='d-flex gap-1 gap-sm-2 align-items-center text-white'>
        <i className='fa-solid fa-wallet text-light'></i>
        <div>
          <span className='userText'>{formattedBalance} MMK</span>
        </div>
      </div>
      <button className='btn' onClick={logout}>
        <i className='fa-solid fa-right-from-bracket text-light'></i>
        <span>Logout</span>
      </button>
    </>
  );
};

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [wallets, setWallets] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [smallLoad, setSmallLoad] = useState(false);

  const navigate = useNavigate();

  const [auth, setAuth] = useState(localStorage.getItem('authToken'));
  const url = auth ? `${BASE_URL}/user` : '';
  const { data: authUser } = useFetch(url);

  const [user, setUser] = useState(authUser);

  useEffect(() => {
    setUser(authUser);
  }, [authUser]);

  const logout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <div className='border-bottom py-1 py-md-2 px-2 px-md-5 d-flex flex-wrap align-items-center justify-content-between'>
      <NavLink
        className='text-decoration-none d-flex navLogo align-items-center '
        to={'/'}
      >
        <h2 className='logo mt-1' style={{ color: 'gold' }}>
          <img src={logo} width={45} alt='' />
        </h2>
        <h5 className=' logoTitle ms-2 text-light'>Max Win</h5>
      </NavLink>
      {window.location.pathname === '/' && (
        <div className='logoIcon d-flex gap-2 gap-sm-4 align-items-center text-white'>
          {auth ? (
            <AuthenticatedUserActions user={user} logout={logout} />
          ) : (
            <NavLink to={'/login'}>
              <button
                style={{
                  border: '2px solid #FFD700',
                  background: 'none',
                  fontSize: '13px',
                  color: '#FFD700',
                  padding: '6px 30px',
                }}
                className='ms-2 bg-none rounded-2'
              >
                LOGIN
              </button>
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
