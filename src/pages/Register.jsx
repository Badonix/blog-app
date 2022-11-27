import React from "react";
import { HiOutlineUpload } from "react-icons/hi";
import { Link } from "react-router-dom";
function Register() {
  return (
    <section className="register-section">
      <div className="register-cont">
        <div className="mini-div-cont">
          <h2>Register</h2>
          <div className="pfp-register-upload">
            <label htmlFor="pfp-upload">
              {" "}
              <img
                className="pfp-register-shape"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TfzLy18H3WF1_fuZg40SgHbvb9sQHrTl5QeNTc7scg&s"
              />
            </label>

            <label htmlFor="pfp-upload">Profile Picture</label>
            <input type="file" id="pfp-upload" style={{ display: "none" }} />
            <label htmlFor="pfp-upload">
              {" "}
              <HiOutlineUpload className="upload-image-icon" />
            </label>
          </div>
          <div className="email-input-register">
            <label htmlFor="email-inp">Email</label>
            <input
              id="email-inp"
              placeholder="example@gmail.com"
              type="text"
              className="register-input-email"
            />
          </div>
          <div className="username-input-register">
            <label htmlFor="username-inp">Username</label>
            <input
              id="username-inp"
              placeholder="nickname"
              type="text"
              className="username-input-email"
            />
          </div>
          <div className="password-input-register">
            <label htmlFor="pass-inp">Password</label>
            <input
              id="pass-inp"
              type="password"
              placeholder="********"
              className="register-input-password"
            />
          </div>
          <button className="sign-up-button">Sign Up</button>
          <Link to="/login">
            <button className="log-in-instead">Log in instead</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
