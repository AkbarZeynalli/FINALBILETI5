import React from "react";
import "./Navbar.scss";
import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <div className="image">
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png.webp"
            alt=""
          />
        </div>
      </div>
      <div className="nav">
        <ul className="navbar">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/catagori">Catagori</Link>
          </li>
          <li className="navbar-item">
            <Link to="/latest">Latest</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/pages">Pages</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
        <div className="wrapper">
          <div className="heart">
            <Link to="/heart">
              <FaHeart />
            </Link>
          </div>
          <div className="basket">
            <Link to="/basket">
              <SlBasket />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
