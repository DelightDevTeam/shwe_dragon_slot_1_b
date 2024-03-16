import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import BASE_URL from "../hooks/baseURL";
import { DevTool } from "@hookform/devtools";

function Login() {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const form = useForm({
    mode: "onTouched",
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  let auth = localStorage.getItem("authToken");

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = (loginData) => {
    setLoading(true);
    //fetch api for login url
    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Log In Failed");
        }
        return response.json();
      })
      .then((responseData) => {
        // console.log(responseData);
        if (responseData) {
          const userData = responseData.data.user;
          // console.log(userData);
          localStorage.setItem("authToken", responseData.data.token);
          localStorage.setItem(
            "authUser",
            JSON.stringify({
              userData,
            })
          );
        } else {
          throw new Error("Token not found in response");
        }
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        if (error) {
          setErrorMessage("Phone Or Password is incorrect!");
          setLoading(false);
        }
      });
  };

  return (
    <>
      {!auth && (
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Form
                noValidate
                validated={validated}
                className="w-75 mt-5 mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                {errorMessage && (
                  <div
                    className="alert alert-danger mt-2"
                    role="alert"
                    style={{ fontSize: "14px" }}
                  >
                    {errorMessage}
                  </div>
                )}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-warning fw-bolder">
                    Player Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Player Name..."
                    {...register("user_name", {
                      required: "Name is Required.",
                    })}
                    className={`${errors.name && "border-2 border-danger"}`}
                  />
                  <div className="error text-danger">{errors.name?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-warning fw-bolder">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password..."
                    {...register("password", {
                      required: "Password is Required.",
                    })}
                    className={`${errors.password && "border-2 border-danger"}`}
                  />
                  <div className="error text-danger">{errors.password?.message}</div>
                </Form.Group>

                <div className="text-center">
                  <Button variant="warning" className="w-100 mt-4" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          </div>

      )}
    </>
  );
}

export default Login;
