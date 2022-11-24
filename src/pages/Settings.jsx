import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
function Settings() {
  const [userEdit, setUserEdit] = useState(false);
  const [userValue, setUserValue] = useState("Your Name");
  const handleUserEdit = () => {
    setUserEdit((prev) => !prev);
  };
  return (
    <section className="settings-section">
      <div className="info-container">
        <img
          className="settings-pfp"
          src="https://i.pinimg.com/736x/3a/64/69/3a6469083e633a02f132c2dea8538e8f.jpg"
        />
        <div className="username-settings">
          <span
            className="settings-username-input"
            contenteditable={userEdit ? "true" : "false"}
          >
            {userValue}
          </span>
          <AiFillEdit onClick={handleUserEdit} className="edit-name" />
        </div>
      </div>
    </section>
  );
}

export default Settings;
