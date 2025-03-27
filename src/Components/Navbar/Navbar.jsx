import React from "react";
import { useState } from "react";
import "./Navbar.css";
import jesilogo from "../../assets/jesilogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a nav item is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />} {/* Change icon dynamically */}
      </div>

      <div className="navbar-logo">
        <img src={jesilogo} alt="" />
      </div>

      {/* <div className="nav-links"> */}
      <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
        <a
          href="#"
          className={menu === "home" ? "active" : ""}
          onClick={() => {
            setMenu("home");
            closeMenu();
          }}
        >
          Home
        </a>

        <a
          href="#"
          className={menu === "course" ? "active" : ""}
          onClick={() => {
            setMenu("course");
            closeMenu();
          }}
        >
          Course
        </a>

        <a
          href="#"
          className={menu === "blog" ? "active" : ""}
          onClick={() => {
            setMenu("blog");
            closeMenu();
          }}
        >
          Blog
        </a>

        <a
          href="#"
          className={menu === "contact" ? "active" : ""}
          onClick={() => {
            setMenu("contact");
            closeMenu();
          }}
        >
          Contact
        </a>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
