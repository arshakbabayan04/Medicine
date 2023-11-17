import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <nav className="nav nav-underline">
          <div className="container">
            <ul className="nav justify-content-center gap-5">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addmedicine">
                  New Medicine
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
