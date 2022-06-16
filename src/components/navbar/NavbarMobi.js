import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { BiShoppingBag } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import "./NavbarMobi.css";
import { Link } from "react-router-dom";

const NavbarMobi = ({ setOpenSidebar, openSidebar }) => {
  return (
    <div className="navbarContainer-mobi">
      {/* ROW - 01 */}
      <div className="navbarContainer-mobi-row-1">
        {/* 1st col */}
        <div className="">
          <div className="navbarContainerHamburger">
            <Hamburger
              toggle={setOpenSidebar}
              toggled={openSidebar}
              // color="#fff"
            />
          </div>
        </div>
        {/* 2nd col */}
        {/* <div className="">
          <img className="navbarContainerLogo" src={logo} alt="" />
        </div> */}
        <div style={{ fontSize: "32px" }} className="navbarContainerLogo">
          <Link to="/"> Exino</Link>
        </div>
        {/* 3rd col */}
        <Link to="/shipping-cart">
          <div className="">
            <BsBag size={32} />
            <div className="product-count-navbarMobi">0</div>
          </div>
        </Link>
      </div>
      {/* ROW - 02 */}
      <div className="navbarContainer-mobi-row-2">
        <input
          style={{ border: "none" }}
          className="navbar-mobi-search"
          placeholder="E.g. Initials, Chokers"
        />
        <FiSearch className="navbar-icon navbar-mobi-search-icon" />
      </div>
    </div>
  );
};

export default NavbarMobi;
