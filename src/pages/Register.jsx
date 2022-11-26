import React from "react";

function Register() {
  return (
    <section className="register-section">
      <div className="register-cont">
        <div className="mini-div-cont">
          <h2>Register</h2>
          <div className="email-input-register">
            <label htmlFor="email-inp">Email</label>
            <input
              id="email-inp"
              placeholder="example@gmail.com"
              type="text"
              className="register-input-email"
            />
          </div>
          <div className="password-input-register">
            <label htmlFor="pass-inp">Password</label>
            <input
              id="pass-inp"
              type="text"
              placeholder="********"
              className="register-input-password"
            />
          </div>
          <button className="sign-up-button">Sign Up</button>
        </div>
      </div>
    </section>
  );
}

export default Register;
