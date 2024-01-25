import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import "./Navbar.css";
import { useGlobalContext } from "../../context";
const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { category, handleCategoryChange } = useGlobalContext();

  const categories = ["AI", "Health", "Security", "Startups", "Tech"];

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
  ];
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleCategoryToggle = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="nav-flex">
          <Link to="/">
            <h1 className="logo">
              news<span>Blog</span>
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

            <div>
              <p className="links li" onClick={handleCategoryToggle}>
                See Categories
                <span> {isCategoryOpen ? <FaMinus /> : <FaPlus />}</span>
              </p>

              <div className={isCategoryOpen ? "" : "open-cat"}>
                <div className="li">
                  <p
                    className={`links ${!category ? "active-cat" : ""}`}
                    onClick={() => {
                      handleCategoryChange(null);
                      handleMenuToggle();
                      navigate("/");
                    }}
                  >
                    See All
                  </p>
                </div>
                {categories.map((cat, index) => {
                  return (
                    <li key={index} className="li">
                      <p
                        className={`hover links ${
                          cat === category ? "active-cat" : ""
                        }`}
                        onClick={() => {
                          handleCategoryChange(cat);
                          handleMenuToggle();
                          navigate("/");
                        }}
                      >
                        {cat}
                      </p>
                    </li>
                  );
                })}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
