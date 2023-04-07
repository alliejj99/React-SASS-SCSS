import React from "react";
import { IoMenu as Menu } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const LeftNav = () => {
  return (
    <div className="menu-logo">
      <button className="icon-container burgerMenu">
        <Menu size={25} />
      </button>

      <div className="logo-container">
        <Link to="/">
          <img
            src={logo}
            alt="youtube logo"
            data-tooltip-content="Youtube Home"
            data-tooltip-id="sidebar"
          />
        </Link>
      </div>
    </div>
  );
};

export default LeftNav;
