import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Input from "../../components/Input";
import { signup, signin } from "../../action/auth";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import logo from "../../assets/logo.png";
import "./Auth.css";
import Alert from "../../components/Alert";

const initialData = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const Login = () => {
  const message = useSelector((state) => state.auth.message);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setformData] = useState(initialData);
  const [show, setShow] = useState(message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShow(null);
    }, 1500);
  }, [message]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
    setformData(initialData);
  };
  const switchMode = () => {
    setIsSignUp((prev) => !prev);
    setformData(initialData);
  };
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", payload: { result, token } });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("something went wrong");
  };
  // const responseFacebook = async (response) => {
  //   console.log(response, response);
  // };

  const disabled =
    validator.isEmail(formData.email) &&
    validator.isStrongPassword(formData.password, [
      {
        minLength: 8,
        maxLength: 20,
        minUpperCase: 1,
        minSymbol: 1,
      },
    ]);

  return (
    <div className="cover_bg flex justify-center items-center">
      <div>
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg opacity-95 w-80 sm:w-96">
          <img src={logo} alt="logo" className="h-20 justify-center mx-auto" />
          <h3 className="text-2xl font-bold text-center">
            {isSignUp ? "Create your account" : "Login"}
          </h3>
          <form noValidate onSubmit={formSubmitHandler}>
            {isSignUp && (
              <Input
                type="text"
                name="name"
                placeholder="name"
                handleChange={handleChange}
                value={formData.name}
                validationText={formData.name === "" && "* required"}
              />
            )}
            <Input
              type="email"
              name="email"
              placeholder="email"
              handleChange={handleChange}
              value={formData.email}
              validationText={
                !validator.isEmail(formData.email) && "* required"
              }
            />
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              handleChange={handleChange}
              value={formData.password}
              validationText={
                !validator.isStrongPassword(formData.password, [
                  {
                    minLength: 8,
                    maxLength: 20,
                    minUpperCase: 1,
                    minSymbol: 1,
                  },
                ]) && "* between 8-20 character, 1 uppercase, 1 symbol"
              }
            />
            {isSignUp && (
              <Input
                type="password"
                name="repeatPassword"
                placeholder="Repeat your password"
                handleChange={handleChange}
                value={formData.repeatPassword}
                validationText={
                  formData.password !== formData.repeatPassword &&
                  "* Password does not match or not entered"
                }
              />
            )}
            <button
              type="submit"
              data-mdb-ripple="true" 
              data-mdb-ripple-color="light" 
              data-mdb-ripple-duration="1000ms"
              className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              disabled={!disabled}
            >
              {isSignUp ? "Create account" : "Login"}
            </button>
            {show && <Alert message={message} type="warning" />}
            <div className="text-center font-light font-sans from-neutral-500 text-sm my-2">
              or sign in with
            </div>
            <div className="my-2 flex items-baseline justify-between">
              <div className="text-xs">
                {!isSignUp ? "New User?" : "Existing user?"}{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={switchMode}
                >
                  {isSignUp ? "Log in" : "create account"}
                </span>
              </div>
            </div>
            <div className="sm:flex justify-between">
              {/* <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                autoLoad
                callback={responseFacebook}
                render={(renderProps) => (
                  <button
                    className="btn btn-primary w-full sm:w-1/2 px-2 py-2 mt-2 mx-1 text-white bg-blue-400 rounded-lg hover:bg-blue-600"
                    onClick={renderProps.onClick}
                  >
                    facebook
                  </button>
                )}
              /> */}
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                render={(renderProps) => (
                  <button
                    className="btn btn-primary w-full sm:w-1/2 px-2 py-2 mt-2 mx-1 text-white bg-red-400 rounded-lg hover:bg-red-600"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Gmail Login
                  </button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
