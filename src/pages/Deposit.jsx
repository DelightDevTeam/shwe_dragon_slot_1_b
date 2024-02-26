import React, { useEffect, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import { Accordion } from "react-bootstrap";

import deposit from "./../assets/img/playerInfo/deposit.png";
import transfer from "./../assets/img/playerInfo/transfer.png";
import wt from "./../assets/img/playerInfo/withdraw.png";
import wallet from "./../assets/img/footerIcons/wallet.png";

import "./../assets/css/deposit.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../hooks/baseURL";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Deposit = () => {
  let auth = localStorage.getItem("authToken");
  const [searchParams] = useSearchParams();
  const [providers, setProviders] = useState();
  const [loader, setLoader] = useState(false);
  const [wallets, setWallets] = useState();
  const [user, setUser] = useState();
  const [banks, setBanks] = useState();
  // console.log(banks);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, []);
  const form = useForm({
    mode: "onTouched",
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const form2 = useForm();

  const {
    register: register2,
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    reset: reset2,
  } = form2;

  const getProvider = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .get(BASE_URL + "/providers", { headers })
      .then((response) => {
        setProviders(response.data.data);
      })
      .catch((e) => console.log(e));
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
      })
      .catch((e) => console.log(e));
  };

  const getBank = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .get(BASE_URL + "/bank/all", { headers })
      .then((response) => {
        setBanks(response.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getProvider();
    getWallet();
    getAuthUser();
    getBank();
  }, []);

  const accordionMenu = [
    { id: 1, title: "ASIAGAMING", value: wallets?.ag_wallet },
    { id: 2, title: "GAMEPLAY", value: wallets?.g8_wallet },
    { id: 3, title: "BBIN", value: wallets?.gb_wallet },
    { id: 4, title: "JDB", value: wallets?.jd_wallet },
    { id: 5, title: "JOKER", value: wallets?.jk_wallet },
    { id: 6, title: "KING855", value: wallets?.k9_wallet },
    { id: 7, title: "NEW LIVE22", value: wallets?.l4_wallet },
    { id: 1, title: "PGSOFT", value: wallets?.pg_wallet },
    { id: 2, title: "PRAGMATIC", value: wallets?.pr_wallet },
    { id: 3, title: "KING MAKER", value: wallets?.re_wallet },
    { id: 4, title: "SBO", value: wallets?.s3_wallet },
  ];

  const deposite = (depositeData) => {
    console.log(depositeData);

    setLoader(true);
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .post(BASE_URL + "/transaction/deposit", depositeData, { headers })
      .then((response) => {
        console.log(response);
        // let wallet = response.data;
        if (response.status == 200) {
          setLoader(false);
          reset();
          getWallet();
          toast.success("Deposite Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const withdraw = (withdrawData) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .post(BASE_URL + "/transaction/withdraw", withdrawData, { headers })
      .then((response) => {
        if (response.status == 200) {
          let wallet = response.data;
          getList();
          setLoader(false);
          reset2();
          toast.success("Withdraw Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <>
      <div className="ms-md-5 ms-3" style={{ color: "#ddd" }}>
        <small>လက်ကျန်ငွေ ( MMK )</small>
        <p className="fw-bold">
          {parseFloat(user?.balance).toLocaleString()} MMK
        </p>
      </div>

      <Tabs
        defaultActiveKey={searchParams.get("tab") || "deposit"}
        id="fill-tab-example"
        className="mb-3 flex-nowarp"
        fill
      >
        <Tab
          eventKey="deposit"
          className="custom-tab-menu nav-tabs"
          title={
            <>
              <img
                src={deposit}
                alt="deposit"
                className="custom-tab-menu-icon"
              />
              <div className="text-white">deposit</div>
            </>
          }
        >
          <div className="custom-tab-content">
            {
              <>
                <Accordion className="mx-1 bg-primary">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <small>လက်ကျန်ငွေ</small>
                      <span>Click to view more</span>
                    </Accordion.Header>
                    <Accordion.Body className="bg-dark text-white outline-none border-none">
                      <div>
                        <div className="d-flex justify-content-center align-items-center">
                          <img src={wallet} style={{ width: "30px" }} alt="" />
                          <p className="mx-2 fw-bold">
                            K {parseFloat(user?.balance).toLocaleString()}
                          </p>
                        </div>

                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                          {accordionMenu.map((menu) => (
                            <div className="accordion-div" key={menu.id}>
                              <p className="accordion-title">{menu.title}</p>
                              <small>{menu.value}</small>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <ToastContainer />
                <Form onSubmit={handleSubmit(deposite)}>
                  <Form.Group
                    className="mb-3 mx-md-5"
                    controlId="exampleForm.ControlInput1"
                  >
                    <h6 className="text-warning mt-4">
                      ဂိမ်းအမျိုးအစား ရွေးချယ်ပါ
                    </h6>
                    <Form.Select
                      aria-label="Default select example"
                      className={`form-control-input ${
                        errors.p_code && "border-2 border-danger"
                      }`}
                      {...register("p_code", {
                        required: "Provider Code is Required.",
                      })}
                    >
                      <option value={""} className="text-dark">
                        ကျေးဇူးပြု၍ ရွေးချယ်ပါ
                      </option>
                      {providers &&
                        providers.map((provider, index) => (
                          <option
                            key={index}
                            value={provider.p_code}
                            className="text-dark"
                          >
                            {provider.description}
                          </option>
                        ))}
                    </Form.Select>
                    <div className="error text-danger">
                      {errors.p_code?.message}
                    </div>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 mx-md-5"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>ငွေပမာဏ ထည့်ပါ</Form.Label>
                    <Form.Control
                      className={`form-control-input ${
                        errors.cash_in && "border-2 border-danger"
                      } `}
                      type="number"
                      placeholder="ငွေပမာဏ ထည့်ပါ"
                      {...register("cash_in", {
                        required: "Amount is Required.",
                        min: {
                          value: 1000,
                          message: "Sorry amount can't be below 1000",
                        },
                      })}
                    />
                    <div className="error text-danger">
                      {errors.cash_in?.message}
                    </div>
                  </Form.Group>

                  <div className="d-flex justify-content-center mt-4">
                    <button className="profile-btn w-75" type="submit">
                      တင်သွင်းသည်
                    </button>
                  </div>
                </Form>
              </>
            }
          </div>
        </Tab>
        {/* <Tab
          eventKey="transfer"
          className="custom-tab-menu"
          title={
            <>
              <img
                src={transfer}
                alt="Transfer"
                className="custom-tab-menu-icon"
              />{" "}
              <div className="text-white">transfer</div>
            </>
          }
        >
          <div className="custom-tab-content">
            {
              <Form>
                <Form.Group
                  className="mb-3 mx-5"
                  controlId="profileForm.ControlInput1"
                >
                  <Form.Label>ပင်မ ပိုက်ဆံအိတ်</Form.Label>
                  <Form.Control
                    className="form-control-input"
                    type="email"
                    placeholder="0.00"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 mx-5"
                  controlId="profileForm.ControlInput2"
                >
                  <Form.Label>from</Form.Label>
                  <Form.Control
                    className="form-control-input"
                    type="email"
                    placeholder="ကျေးဇူးပြုရ်ျ  ရွေးချယ်ပါ"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 mx-5"
                  controlId="profileForm.ControlInput3"
                >
                  <Form.Label>သို့</Form.Label>
                  <Form.Control
                    className="form-control-input"
                    type="email"
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 mx-5"
                  controlId="profileForm.ControlInput3"
                >
                  <Form.Label>လွဲပြောင်းခြင်း</Form.Label>
                  <Form.Control
                    className="form-control-input"
                    type="email"
                    placeholder=""
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <button className="profile-btn w-75">တင်သွင်းသည်</button>
                </div>
              </Form>
            }
          </div>
        </Tab> */}
        <Tab
          eventKey="withdraw"
          className="custom-tab-menu"
          title={
            <>
              <img src={wt} alt="Withdraw" className="custom-tab-menu-icon" />{" "}
              <div className="text-white">withdraw</div>
            </>
          }
        >
          <div className="custom-tab-content">
            {
              <Form onSubmit={handleSubmit2(withdraw)}>
                <Form.Group
                  className="mb-3 mx-md-5"
                  controlId="exampleForm.ControlInput1"
                >
                  <h6 className="text-warning mt-4">ဘဏ် ရွေးချယ်ပါ</h6>
                  <Form.Select
                    aria-label="Default select example"
                    className={`form-label form-select ${
                      errors2.bank_id && "border-2 border-danger"
                    }`}
                    {...register2("bank_id", {
                      required: "Bank is Required.",
                    })}
                  >
                    <option value={""} className="text-dark">
                      ကျေးဇူးပြု၍ ရွေးချယ်ပါ
                    </option>
                    {banks &&
                      banks.map((bank, index) => (
                        <option
                          key={index}
                          value={bank.id}
                          className="text-dark"
                        >
                          {bank.name}
                        </option>
                      ))}
                  </Form.Select>
                  <div className="error text-danger">
                    {errors2.bank_id?.message}
                  </div>
                </Form.Group>
                <Form.Group
                  className="mb-3 mx-5"
                  controlId="withdrawForm.ControlInput2"
                >
                  <Form.Label>ငွေပမာဏ ထည့်ပါ</Form.Label>
                  <Form.Control
                    className={`form-control-input ${
                      errors2.amount && "border-2 border-danger"
                    }`}
                    type="number"
                    placeholder="ငွေပမာဏ ထည့်ပါ"
                    {...register2("amount", {
                      required: "Amount is Required.",
                    })}
                  />
                  <div className="error text-danger">
                    {errors2.amount?.message}
                  </div>
                </Form.Group>
                <Form.Group
                  className="mb-3 mx-5"
                  controlId="withdrawForm.ControlInput2"
                >
                  <Form.Label>ဘဏ်အ‌ကောင့်အမည် ထည့်ပါ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ဘဏ်အ‌ကောင့်အမည် ထည့်ပါ"
                    className={`form-control-input ${
                      errors2.account_name && "border-2 border-danger"
                    }`}
                    {...register2("account_name", {
                      required: "Account Name is Required.",
                    })}
                  />
                  <div className="error text-danger">
                    {errors2.account_name?.message}
                  </div>
                </Form.Group>
                <Form.Group
                  className="mb-3 mx-5"
                  controlId="withdrawForm.ControlInput2"
                >
                  <Form.Label>ဘဏ်အ‌ကောင့်နံပါတ် ထည့်ပါ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ဘဏ်အ‌ကောင့်နံပါတ် ထည့်ပါ"
                    className={`form-control-input ${
                      errors2.account_no && "border-2 border-danger"
                    }`}
                    {...register2("account_no", {
                      required: "Account Number is Required.",
                    })}
                  />
                  <div className="error text-danger">
                    {errors2.account_no?.message}
                  </div>
                </Form.Group>
                <div className="d-flex justify-content-center mt-4">
                  <button className="profile-btn w-75" type="submit">
                    တင်သွင်းသည်
                  </button>
                </div>
              </Form>
            }
          </div>
        </Tab>
        {/* <Tab
          eventKey="history"
          className="custom-tab-menu"
          title={
            <>
              <img src={wt} alt="Histpry" className="custom-tab-menu-icon" />{" "}
              <div className="text-white">history</div>
            </>
          }
        >
          <div className="custom-tab-content">
            {
              <Form>
                <Form.Group
                  className="mb-3 mx-5"
                  controlId="rebateForm.ControlInput1"
                >
                  <Form.Label>အစီရင်ခံစာ အမျိုးအစား</Form.Label>
                  <Form.Control
                    className="form-control-input"
                    type="password"
                    placeholder=""
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 mx-5"
                  controlId="rebateForm.ControlInput1"
                >
                  <Form.Label>From / To</Form.Label>
                  <Form.Control
                    className="form-control-input"
                    type="password"
                    placeholder=""
                    required
                  />
                  <div className="d-flex justify-content-center mt-5">
                    <button className="profile-btn w-75">တင်သွင်းသည်</button>
                  </div>
                </Form.Group>
              </Form>
            }
          </div>
        </Tab> */}
      </Tabs>
    </>
  );
};

export default Deposit;
