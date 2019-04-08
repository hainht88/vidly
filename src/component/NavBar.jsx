import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Vidly
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/customers">
            Customers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/rentals">
            Rentals
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
