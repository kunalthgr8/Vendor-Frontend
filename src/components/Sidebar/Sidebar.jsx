import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { IoHome } from "react-icons/io5";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineNoteAdd } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

const SideBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderNavLinks = () => {
    const navLinks = [
      { to: "/", text: "Home", icon: <IoHome /> },
      { to: "/productpage", text: "Products", icon: <AiFillMedicineBox /> },
      { to: "/addproduct", text: "Add Product", icon: <FaCartShopping /> },
      { to: "/orderhistory", text: "Order History", icon: <FaCartShopping /> },
      { to: "/contact", text: "Contact Us", icon: <IoMdContacts /> },
    ];

    return navLinks.map((link, index) => (
      <NavLink
        key={index}
        to={link.to}
        activeClassName="Items-Active"
        className={`Items-SideBars`}
      >
        {link.text}
      </NavLink>
    ));
  };

  return windowWidth >= 1300 || windowWidth <= 761 ? (
    <div className="SideBar sidebar bg-sidebar-color text-white md:h-screen  md:fixed md:top-0 left-0 p-4">
      <div className="Logo-SideBar">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="Image-SideBar" />
        </NavLink>
      </div>
      <div className="Title-SideBar">
        <h2 className="Heading-Sidebar">Aoushadhi</h2>
      </div>
      <div className="Items-SideBar">
        {renderNavLinks()}
        <span className="User-SideBar">Log Out</span>
      </div>
      <div className="Footer-SideBar">
        <p>
          Copyright Aquired By<p>@Aoushadhi</p>
        </p>
      </div>
    </div>
  ) : (
    <div className="Logo-Sidebar SideBar sidebar bg-sidebar-color text-white h-screen  fixed top-0 left-0 ">
      <div className="img-small">
        <Link to="/">
          <img src={Logo} alt="Aoushadhi" />
        </Link>
      </div>
      <div className="detail-Logo">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${isActive ? "Items-Active" : ""} logo-SideBars`
          }
        >
          <IoHome />
        </NavLink>
        <NavLink
          to="/productpage"
          className={({ isActive }) =>
            ` ${isActive ? "Items-Active" : ""} logo-SideBars`
          }
        >
          <AiFillMedicineBox />
        </NavLink>
        <NavLink
          to="/addproduct"
          className={({ isActive }) =>
            ` ${isActive ? "Items-Active" : ""} logo-SideBars`
          }
        >
          <MdOutlineNoteAdd />
        </NavLink>

        <NavLink
          to="/orderhistory"
          className={({ isActive }) =>
            ` ${isActive ? "Items-Active" : ""} logo-SideBars`
          }
        >
          <FaHistory />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            ` ${isActive ? "Items-Active" : ""} logo-SideBars`
          }
        >
          <IoMdContacts />
        </NavLink>
      </div>

      <div className="logout-Logo">
        <FiLogOut />
      </div>
    </div>
  );
};

export default SideBar;
