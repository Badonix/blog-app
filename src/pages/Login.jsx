import React from "react";

function Login() {
  return (
    <section className="login-section">
      <div className="login-cont">
        <div className="mini-div-cont">
          <h2>Log In</h2>
          <div className="email-input-login">
            <label htmlFor="email-inp">Email</label>
            <input
              id="email-inp"
              placeholder="example@gmail.com"
              type="text"
              className="login-input-email"
            />
          </div>
          <div className="password-input-login">
            <label htmlFor="pass-inp">Password</label>
            <input
              id="pass-inp"
              type="text"
              placeholder="********"
              className="login-input-password"
            />
          </div>
          <button className="sign-in-button">Sign In</button>
        </div>
      </div>
    </section>
  );
}

export default Login;
