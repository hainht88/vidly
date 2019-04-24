import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Vidly
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/movies" className="nav-link">
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
