import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import "./../assets/css/profile.css";
import profile from "./../assets/img/profile.png";
import Password from "./../assets/img/password.png";

import useFetch from "./../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";
import PROFILE_URL from "../hooks/profileURL";
import useFormSubmit from "../hooks/useFormSubmit";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// import { useForm } from 'react-hook-form';

const Profile = () => {
  const banks = [
    "Yoma Bank",
    "AYA Bank",
    "CB Bank",
    "KBZ Bank",
    "Kpay",
    "Wave Money",
  ];
  const { data: authUser } = useFetch(BASE_URL + "/user");
  const[user, setUser] = useState(authUser);
  const[name, setName] = useState("")
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  // console.log(phone);

  let auth = localStorage.getItem("authToken");
  if (!auth) {
    useEffect(() => {
      navigate("/login"); // Navigate to the home route
    }, [navigate]);
  }

  const handleProfile = (e) => {
    e.preventDefault();
    const inputData = {
      phone: phone,
      name: name,
    };
    fetch(BASE_URL + "/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      body: JSON.stringify(inputData),
    })
      .then(async (response) => {
        if (!response.ok) {
          let errorData;
          try {
            errorData = await response.json();
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
          if (response.status === 422) {
            setError(errorData.errors);
            console.error(`${response.status}:`, errorData);
          } else if (response.status === 401) {
            setError(errorData.message);
            console.error(`${response.status}:`, errorData);
          } else {
            console.error(`Unexpected error with status ${response.status}`);
          }
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setUser(data.data)
        console.log(data.data);
        setSuccess("Profile Updated Successfully.");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePassword = (e) => {
    e.preventDefault();
    const inputData = {
      current_password: currentPassword,
      password: password,
      password_confirmation: confirmPassword,
    };
    // console.log(inputData);
    fetch(BASE_URL + "/changePassword", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      body: JSON.stringify(inputData),
    })
      .then(async (response) => {
        if (!response.ok) {
          let errorData;
          try {
            errorData = await response.json();
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
          if (response.status === 422) {
            setError(errorData.errors);
            console.error(`${response.status}:`, errorData);
          } else if (response.status === 401) {
            setError(errorData.message);
            console.error(`${response.status}:`, errorData);
          } else {
            console.error(`Unexpected error with status ${response.status}`);
          }
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setSuccess("New Password Changed Successfully.");
        setError("")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setUser(authUser);
    setName(authUser.name)
    setPhone(authUser.phone);
  }, [authUser]);

  const balance = user?.balance;
  const formattedBalance = user && balance ? parseFloat(balance).toLocaleString() : '';

  return (
    <>
      {user && (
        <div className="px-2 px-sm-0 row mt-4">
          <div className="col-lg-4 col-md-6 offset-lg-4 offset-md-3">
            <div className="d-flex justify-content-start align-items-center">
              {/* <img
                className="rounded-circle border border-3 border-warning"
                src={user && PROFILE_URL + "/" + user.profile}
                width={100}
                alt=""
              /> */}
              <div className=" mb-2">
                <p className="fw-bold h3" style={{ color: "#eee" }}>
                  {user && user.name}
                </p>
                <span style={{ color: "#ddd" }}>
                  <i className="fas fa-wallet"></i>{" "}
                  {formattedBalance} MMK
                </span>
              </div>
            </div>
            <Tabs
              defaultActiveKey="home"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab
                eventKey="home"
                className="custom-tab-menu nav-tabs"
                title={
                  <>
                    <img
                      src={profile}
                      alt="Home"
                      className="custom-tab-menu-icon"
                    />{" "}
                    <div>ကိုယ်ရေးအကျဥ်း</div>
                  </>
                }
              >
                <div className="custom-tab-content">
                  {success && <Alert variant="success">{success}</Alert>}
                  {
                    <Form onSubmit={handleProfile}>
                      <Form.Group className="mb-3">
                        <Form.Label>အသုံးပြုသူ အမည်</Form.Label>
                        <Form.Control
                          className="form-control-input"
                          type="text"
                          placeholder="Enter Username"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>ဆက်သွယ်ရန် ဖုန်းနံပတ်</Form.Label>
                        <Form.Control
                          className="form-control-input"
                          type="number"
                          placeholder=""
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        {error.phone && (
                          <span className="text-danger">*{error.phone}</span>
                        )}
                      </Form.Group>

                      <div className="d-flex justify-content-center">
                        <button className="profile-btn w-100" type="submit">
                          တင်သွင်းသည်
                        </button>
                      </div>
                    </Form>
                  }
                </div>
              </Tab>

              <Tab
                eventKey="change-password"
                className="custom-tab-menu nav-tabs"
                title={
                  <>
                    <img
                      src={Password}
                      alt="Change Password"
                      className="custom-tab-menu-icon"
                    />{" "}
                    <div>စကား၀ှက် ပြောင်းပါ</div>
                  </>
                }
              >
                <div className="custom-tab-content">
                  {
                    <Form onSubmit={handlePassword}>
                      {success && <Alert variant="success">{success}</Alert>}
                      {/* {error && <Alert className='bg-danger text-white' variant="fail">{error}</Alert>} */}

                      <Form.Group
                        className="mb-3"
                        controlId="passwordForm.ControlInput1"
                      >
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                          className="form-control-input"
                          type="password"
                          placeholder=""
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          value={currentPassword}
                        />
                        {error.current_password && (
                          <span className="text-danger">
                            *{error.current_password}
                          </span>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="passwordForm.ControlInput3"
                      >
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          className="form-control-input"
                          type="password"
                          placeholder=""
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        {error.password && (
                          <span className="text-danger">*{error.password}</span>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="passwordForm.ControlInput3"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          className="form-control-input"
                          type="password"
                          placeholder=""
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          value={confirmPassword}
                        />
                        {error.confirm_password && (
                          <span className="text-danger">*{error.confirm_password}</span>
                        )}
                      </Form.Group>
                      <div className="d-flex justify-content-center mt-5">
                        <button className="profile-btn w-100">
                          တင်သွင်းသည်
                        </button>
                      </div>
                    </Form>
                  }
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
