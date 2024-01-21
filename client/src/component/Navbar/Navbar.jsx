import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";

import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { path: "/", link: "home" },
    { path: "/about", link: "about" },
    { path: "/press", link: "press" },
    { path: "/contact", link: "contact" },
  ];
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="nav-flex">
          <Link to="/">
            <h1 className="logo">
              our<span>Blog</span>
            </h1>
          </Link>
          <ul className="ul">
            {navItems.map((navItem) => (
              <li key={navItem.link}>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "links")}
                  to={`${navItem.path}`}
                >
                  {navItem.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="menu-icon">
            <button className="btn" onClick={handleMenuToggle}>
              {isOpen ? <IoMdCloseCircleOutline /> : <BiMenuAltRight />}
            </button>
          </div>
        </div>
        <div className="mobile">
          <ul className={`ul2 ${isOpen ? "mobile-menu" : ""}`}>
            {navItems.map((Item) => (
              <li key={Item.path} className="li" onClick={handleMenuToggle}>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : " links")}
                  to={`${Item.path}`}
                >
                  {Item.link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
