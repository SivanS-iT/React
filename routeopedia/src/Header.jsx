import React from "react";
import logo from "./images/react.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-dark">
        <img
          src={logo}
          alt=""
          style={{ height: "35px", verticalAlign: "top" }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-danger" : "nav-link"
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-danger" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cryptodetail/BTC/10">
                Crypto detail
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Product
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/product">
                  Action
                </Link>
                <Link class="dropdown-item" to="/product/list">
                  Product list
                </Link>
                <Link class="dropdown-item" to="/product/create">
                  Product Create
                </Link>
                <Link class="dropdown-item" to="/product/details/3">
                  Product details
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
