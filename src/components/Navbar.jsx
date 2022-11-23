import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleBurgerOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <nav>
        <div className="left-nav">
          <Link to="/">
            <h2>BadiBlog</h2>
          </Link>
        </div>

        <div className="right-nav">
          <ul className={isOpen ? "open-nav" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            {isOpen ? (
              <IoMdClose onClick={handleBurgerOpen} className="close-btn" />
            ) : (
              ""
            )}
          </ul>
          <div className="profile-cont">
            <img src="https://i.pinimg.com/736x/3a/64/69/3a6469083e633a02f132c2dea8538e8f.jpg" />
            <p>Nick</p>
          </div>
          <FiMenu
            onClick={handleBurgerOpen}
            className={isOpen ? "burger-open changesize" : "burger-open"}
          />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
