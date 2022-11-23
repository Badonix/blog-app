import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="left-nav">
        <h2>BadiBlog</h2>
      </div>

      <div className="right-nav">
        <ul>
          <li>Home</li>
          <li>Create</li>
          <li>About</li>
          <li>Contact</li>
          <li>Logout</li>
        </ul>
        <div className="profile-cont">
          <img src="https://i.pinimg.com/736x/3a/64/69/3a6469083e633a02f132c2dea8538e8f.jpg" />
          <p>Nick</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
