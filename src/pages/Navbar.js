import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/start-learning">Interactive Tutorials</Link></li>
        <li><Link to="/watch-videos">Video Lectures</Link></li>
        <li><Link to="/explore-resources">E-books & Notes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
