import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
function Navbar({ user }) {
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
            {user ? (
              <>
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
              </>
            ) : (
              ""
            )}
            <li>
              {user ? (
                <Link to="/logout">Logout</Link>
              ) : (
                <Link to="/login">Log In</Link>
              )}
            </li>
            {isOpen ? (
              <IoMdClose onClick={handleBurgerOpen} className="close-btn" />
            ) : (
              ""
            )}
          </ul>
          <div className="profile-cont">
            {user ? (
              <>
                <Link to="/profile">
                  <img src="https://i.pinimg.com/736x/3a/64/69/3a6469083e633a02f132c2dea8538e8f.jpg" />
                </Link>
                <Link to="/profile">
                  <p>Nick</p>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TfzLy18H3WF1_fuZg40SgHbvb9sQHrTl5QeNTc7scg&s"
                    }
                  />
                </Link>
              </>
            )}
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
