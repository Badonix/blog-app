import React from "react";

import { ImFilePicture } from "react-icons/im";
function Settings() {
  return (
    <section className="settings-section">
      <div className="info-container">
        <div className="pfp-settings-cont">
          <img
            className="settings-pfp"
            src="https://i.pinimg.com/736x/3a/64/69/3a6469083e633a02f132c2dea8538e8f.jpg"
          />
          <input type="file" id="pfp-input" />
          <label htmlFor="pfp-input">
            <ImFilePicture className="upload-img-settings" />
          </label>
        </div>
        <div className="username-settings-cont settings-cont">
          <label htmlFor="username-input-settings">Username</label>
          <input
            id="username-input-settings"
            type="text"
            placeholder="John Smilga"
          />
        </div>
        <div className="email-settings-cont settings-cont">
          <label htmlFor="email-input-settings">Email</label>
          <input
            id="email-input-settings"
            type="text"
            placeholder="johnsmilga@gmail.com"
          />
        </div>
        <div className="password-settings-cont settings-cont">
          <label htmlFor="password-input-settings">Password</label>
          <input
            id="password-input-settings"
            type="password"
            placeholder="password"
          />
        </div>
        <button className="save-settings">Save</button>
      </div>
    </section>
  );
}

export default Settings;
