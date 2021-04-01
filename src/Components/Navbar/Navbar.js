import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import navbarImage from "../../images/Smart City.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light pt-5" style={{ overflowX: "hidden" }}>
      <div className="container">
        <a className="navbar-brand">
          <img src={navbarImage} alt="" className="navbarImage" />
        </a>
        <div className="navbarListItems">
          <Link to="/home" className="navBar">
            Home
          </Link>
          <Link to="/" className="navBar">
            Destination
          </Link>
          <Link to="/" className="navBar">
            Blog
          </Link>
          <Link to="/" className="navBar">
            Contact
          </Link>
          <button className="btn btn btn-outline-dark">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
