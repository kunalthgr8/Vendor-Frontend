import React, { useState, useEffect } from "react";
import Account from "../../assets/Account.svg";
import "./Topbar.css";
import { Link, NavLink } from "react-router-dom";
import SideBar from "../Sidebar/Sidebar";
// import Sidebar from "./Menu/Sidebar";
// import { IoHome } from "react-icons/io5";
// import { AiFillMedicineBox } from "react-icons/ai";
// import { FaCartShopping } from "react-icons/fa6";
// import { TbDiscount2 } from "react-icons/tb";
// import { IoMdContacts } from "react-icons/io";
// import { FiLogOut } from "react-icons/fi";

import { useLocation } from "react-router-dom";

const TopBar = ({ username }) => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isUserActive = location.pathname === "/user";
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    return () => {
      document.removeEventListener("click", toggleMenu);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className={windowWidth < 761 ? "topbar" : "TopBar"}>
        {windowWidth < 761 && (
          <div className="hamburger-container">
            <label className="hamburger">
              <input type="checkbox" />
              <svg viewBox="0 0 32 32" onClick={toggleMenu}>
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        )}
        {!isUserActive && (
          <div className="Image-TopBar">
            <NavLink to="/user">
              <img src={Account} alt="Account" />
            </NavLink>
            <p>{username}</p>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div className="sidebarcontainer">
          <SideBar />
        </div>
      )}
    </>
  );
};

export default TopBar;
