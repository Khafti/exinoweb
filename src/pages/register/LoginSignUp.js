import React, { Fragment } from "react";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsCreditCard2Back, BsStar } from "react-icons/bs";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { GrClose } from "react-icons/gr";

const LoginSignUp = ({
  loginShow,
  setLoginShow,
  openLoginWindow,
  setOpenLoginWindow,
}) => {
  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div className="loginClosed">
            <GrClose
              onClick={() => {
                setOpenLoginWindow(!openLoginWindow);
              }}
              size={22}
            />
          </div>
          <div className="loginToggleBtn">
            <div
              className="loginToggleBtn-left"
              onClick={() => {
                setLoginShow(true);
              }}
              style={{
                borderBottom: loginShow ? "3px solid #000" : "3px solid #fff",
              }}
            >
              LOGIN
            </div>
            <div
              className="loginToggleBtn-right"
              onClick={() => {
                setLoginShow(false);
              }}
              style={{
                borderBottom: !loginShow ? "3px solid #000" : "3px solid #fff",
              }}
            >
              REGISTER
            </div>
          </div>
          {loginShow && (
            <form
              className="loginForm"
              // ref={loginTab}
              onSubmit={() => {}}
            >
              <div>
                <input
                  className="userInput"
                  placeholder="Email"
                  required
                  type="email"
                />
              </div>
              <div>
                <input
                  className="userInput"
                  placeholder="Password"
                  required
                  type="password"
                />
              </div>
              <div className="userForgetPassword">
                <Link to="/">Forgot Your Password?</Link>
              </div>

              <div>
                <input className="userInputBtn" value="SIGN IN" type="button" />
              </div>
              <div className="or-Container">
                <div className="or-left" />
                <div className="or-middle">OR</div>
                <div className="or-right" />
              </div>

              <button className="login-other">
                <BsFacebook
                  size={24}
                  style={{ marginRight: "8px", color: "#1A74E3" }}
                />
                Continue with Facebook
              </button>
              <button className="login-other">
                <FcGoogle size={24} style={{ marginRight: "8px" }} />
                Continue with Google
              </button>
            </form>
          )}
          {!loginShow && (
            <form
              className="signUpForm"
              // ref={registerTab}
              encType="multipart/form-data"
              // onSubmit={registerSubmit}
            >
              <div className="signUpForm_icons">
                <div className="signUpForm_icons_icon">
                  <div className="signUpForm_icons_icon_item">
                    <AiOutlineCodeSandbox size={32} />
                  </div>
                  <div className="signUpForm_icons_icon_txt">
                    Track your orders easily
                  </div>
                </div>
                <div className="signUpForm_icons_icon">
                  <div className="signUpForm_icons_icon_item">
                    <BsCreditCard2Back size={32} />
                  </div>
                  <div className="signUpForm_icons_icon_txt">
                    Check out faster
                  </div>
                </div>
                <div className="signUpForm_icons_icon">
                  <div className="signUpForm_icons_icon_item">
                    <BsStar size={32} />
                  </div>
                  <div className="signUpForm_icons_icon_txt">
                    Get the best offers
                  </div>
                </div>
              </div>
              <div>
                <input
                  className="userInput"
                  placeholder="First Name"
                  required
                  type="text"
                />
              </div>
              <div>
                <input
                  className="userInput"
                  placeholder="Last Name"
                  required
                  type="text"
                />
              </div>
              <div>
                <input
                  className="userInput"
                  placeholder="Email"
                  required
                  type="email"
                />
              </div>
              <div>
                <input
                  className="userInput"
                  placeholder="Password"
                  required
                  type="password"
                />
              </div>

              <div>
                <input
                  className="userInputBtn"
                  value="CREATE ACCOUNT"
                  type="button"
                />
              </div>
              <div style={{ fontSize: "13px", marginTop: "1.2rem" }}>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                YES, send me member-only deals, birthday surprises, and personal
                offers.
              </div>
              <div style={{ fontSize: "13px", marginTop: ".5rem" }}>
                <input type="checkbox" style={{ marginRight: "10px" }} />I have
                read and accept the Privacy Policy
              </div>
              <div className="or-Container">
                <div className="or-left" />
                <div className="or-middle">OR</div>
                <div className="or-right" />
              </div>

              <button className="login-other">
                <BsFacebook
                  size={24}
                  style={{ marginRight: "8px", color: "#1A74E3" }}
                />
                Continue with Facebook
              </button>
              <button className="login-other">
                <FcGoogle size={24} style={{ marginRight: "8px" }} />
                Continue with Google
              </button>
            </form>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignUp;
