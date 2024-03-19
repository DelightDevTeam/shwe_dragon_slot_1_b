import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Table } from 'react-bootstrap';
import logo from '../../assets/img/logo1.png';
import axios from 'axios';
import BASE_URL from '../../hooks/baseURL';
import '../../assets/css/navbar.css';
import useFetch from '../../hooks/useFetch';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [wallets, setWallets] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [smallLoad, setSmallLoad] = useState(false);

  const navigate = useNavigate();

  // const [auth, setAuth] = useState();
  const auth = localStorage.getItem('authToken');
  const url = auth ? `${BASE_URL}/user` : '';
  const { data: authUser } = useFetch(url);

  const [user, setUser] = useState(authUser);
  // const user = authUser;

  useEffect(() => {
    setUser(authUser);
  }, [authUser]);

  // console.log(user);
  const balance = user?.balance;
  const formattedBalance =
    user && balance ? parseFloat(balance).toLocaleString() : '';

  const logout = () => {
    // Your logout logic here
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <>
    <div
      className='container border-bottom py-1 py-md-2 sticky-top text-white'
      style={{ borderRadius: '10px', backgroundColor: '#00354D' }}
    >
      <div className='d-flex flex-wrap align-items-center justify-content-between'>
        <NavLink
          className='text-decoration-none d-flex navLogo align-items-center '
          to={'/'}
        >
          <h2 className='logo mt-1  ' style={{ color: 'gold' }}>
            <img src={logo} width={45} alt='' />
          </h2>
          <h5 className=' logoTitle ms-2 text-light'>Max Win</h5>
        </NavLink>
        {auth && (
              <>
                <button className='btn d-block d-md-none' onClick={logout}>
                  <i className='fa-solid fa-right-from-bracket text-light'></i>
                </button>
              </>
        )}
          {!auth && (
              <>
                <NavLink to={'/login'} className="text-decoration-none">
                  <button
                    style={{
                      border: '2px solid #FFD700',
                      background: 'none',
                      fontSize: '13px',
                      color: '#FFD700',
                      padding: '6px 20px',
                    }}
                    className='ms-2 bg-none rounded-2 d-block d-md-none'
                  >
                    LOGIN
                  </button>
                </NavLink>
              </>
            )}
        {window.location.pathname === '/' ? (
          <div className="text-end d-none d-md-block">
            <div className='logoIcon d-flex justify-content-center align-items-center gap-2 text-white'>
              {auth && (
                <div>
                  {/* <i class='fa-solid fa-user'></i> */}
                  <NavLink to={'/profile'}>
                    <i className='fa-solid fa-user text-light'></i>
                  </NavLink>
                  <span className=' userText fw-bold ms-1 me-1 ms-sm-2 me-sm-2 text-end'>
                    ID :
                  </span>
                  <span className='userText text-end'>{user?.user_name}</span>
                </div>
              )}
              {auth && (
                <div className='d-flex gap-1 gap-sm-2 align-items-center justify-content-end text-white'>
                  {/* <button className="bg-transparent btn" style={{ outline: "none" }}> */}
                  <i className='fa-solid fa-wallet text-light'></i>
                  {/* </button> */}

                  <div>
                    <span className='userText text-end'>{formattedBalance} MMK</span>
                  </div>
                </div>
              )}
              {auth && (
                <>
                  <button className='btn d-none d-md-block' onClick={logout}>
                    <i className='fa-solid fa-right-from-bracket text-light'></i>
                  </button>
                </>
              )}
              {!auth && (
                <>
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
                </>
              )}
            </div>
          </div>

        ) : (
          ''
        )}
      </div>
        <div className="d-block d-md-none">
          <div className='logoIcon d-flex justify-content-between align-items-center gap-2 text-white'>
            {auth && (
              <div>
                {/* <i class='fa-solid fa-user'></i> */}
                <NavLink to={'/profile'}>
                  <i className='fa-solid fa-user text-light'></i>
                </NavLink>
                <span className=' userText fw-bold ms-1 me-1 ms-sm-2 me-sm-2 text-end'>
                  ID :
                </span>
                <span className='userText text-end'>{user?.user_name}</span>
              </div>
            )}
            {auth && (
              <div className='d-flex gap-1 gap-sm-2 align-items-center justify-content-end text-white'>
                {/* <button className="bg-transparent btn" style={{ outline: "none" }}> */}
                <i className='fa-solid fa-wallet text-light'></i>
                {/* </button> */}

                <div>
                  <span className='userText text-end'>{formattedBalance} MMK</span>
                </div>
              </div>
            )}
            {auth && (
              <>
                <button className='btn d-none d-md-block' onClick={logout}>
                  <i className='fa-solid fa-right-from-bracket text-light'></i>
                </button>
              </>
            )}
            {!auth && (
              <>
                <NavLink to={'/login'} className="text-decoration-none">
                  <button
                    style={{
                      border: '2px solid #FFD700',
                      background: 'none',
                      fontSize: '13px',
                      color: '#FFD700',
                      padding: '6px 20px',
                    }}
                    className='ms-2 bg-none rounded-2 d-none d-md-block'
                  >
                    LOGIN
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
    </div>

    </>

  );
};

export default Navbar;
