import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import axios from "axios";
import BASE_URL from "../../hooks/baseURL";
import '../../assets/css/navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // const [auth, setAuth] = useState();
  const auth = localStorage.getItem("authToken");
  const authUser = JSON.parse(localStorage.getItem("authUser"))?.userData;
  // console.log(authUser);

  useEffect(() => { }, [auth]);

  // useEffect(() => {
  //   setAuth(localStorage.getItem('authToken'));
  // }, [auth]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [smallLoad, setSmallLoad] = useState(false);
  const [wallets, setWallets] = useState();
  const [user, setUser] = useState();

  // console.log(user);

  const logout = () => {
    // Your logout logic here
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const getWallet = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .get(BASE_URL + "/wallet/currentWallet", { headers })
      .then((response) => setWallets(response.data.data));
  };

  const getAuthUser = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .get(BASE_URL + "/user", { headers })
      .then((response) => {
        setUser(response.data.data);
        // console.log(response.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getWallet();
    getAuthUser();
  }, []);
  console.log('window.location.pathname', window.location.pathname);

  const modals = [
    { id: 1, title: "ASIAGAMING", value: wallets?.ag_wallet },
    { id: 2, title: "GAMEPLAY", value: wallets?.g8_wallet },
    { id: 3, title: "BBIN", value: wallets?.gb_wallet },
    { id: 4, title: "JDB", value: wallets?.jd_wallet },
    { id: 5, title: "JOKER", value: wallets?.jk_wallet },
    { id: 6, title: "KING855", value: wallets?.k9_wallet },
    { id: 7, title: "NEW LIVE22", value: wallets?.l4_wallet },
    { id: 8, title: "PGSOFT", value: wallets?.pg_wallet },
    { id: 9, title: "PRAGMATIC", value: wallets?.pr_wallet },
    { id: 10, title: "KING MAKER", value: wallets?.re_wallet },
    { id: 11, title: "SBO", value: wallets?.s3_wallet },
  ];
  return (
    <div className="border-bottom py-1 py-md-2 px-2 px-md-5 d-flex flex-wrap align-items-center justify-content-start justify-content-sm-between">
      <NavLink className="text-decoration-none d-flex navLogo align-items-center " to={"/"}>
        <h2 className="logo mt-1  " style={{ color: "gold" }}>
          <img src={logo} width={45} alt="" />
        </h2>
        <h5 className=' logoTitle ms-2 text-light'>Shwe Dragon Slot</h5>
      </NavLink>
      {window.location.pathname === '/' ? <div className="logoIcon d-flex gap-2 gap-sm-4 align-items-center text-white">
        {auth && (
          <div>
            {/* <i class='fa-solid fa-user'></i> */}
            <NavLink to={"/profile"}>
              <i className="fa-solid fa-user text-light"></i>
            </NavLink>
            <span className=" userText fw-bold ms-1 me-1 ms-sm-2 me-sm-2">ID :</span>
            <span className="userText">{user?.name}</span>
          </div>
        )}
        {auth && (
          <div className="d-flex gap-1 gap-sm-2   align-items-center text-white">
            {/* <button className="bg-transparent btn" style={{ outline: "none" }}> */}
            <i className="fa-solid fa-wallet text-light"></i>
            {/* </button> */}

            <div>
              <span className="userText">{parseFloat(authUser?.balance)} MMK</span>
            </div>
          </div>
        )}
        {auth && (
          <>
            {/* <NavLink to={'/profile'}>
              <i className='fa-solid fa-user text-light'></i>
            </NavLink> */}
            <button className="btn" onClick={logout}>
              <i className="fa-solid fa-right-from-bracket text-light"></i>
            </button>
          </>
        )}
        {!auth && (
          <>
            <NavLink to={"/login"}>
              <button
                style={{
                  border: "2px solid #FFD700",
                  background: "none",
                  fontSize: "13px",
                  color: "#FFD700",
                  padding: "6px 30px",
                }}
                className="bg-none rounded-2"
              >
                LOGIN
              </button>
            </NavLink>
          </>
        )}
      </div> : ''}
      {/* change user name */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered className="table-dark">
            <thead>
              <tr>
                <th>Wallet</th>
                <th>K {parseFloat(user?.balance).toLocaleString()}</th>
              </tr>
            </thead>
            <tbody>
              {modals &&
                modals.map((modal) => (
                  <tr key={modal.id}>
                    <td>{modal.title}</td>
                    <td>{modal.value}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbar;
