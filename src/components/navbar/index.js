import { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";
import "./NavAndSidebar.css";
import { navRoutes } from "./NavLinks";
import Container from "../container";
import NavbarMobi from "./NavbarMobi";
import Sidebar from "./Sidebar";
import { HoverMenuGifts, HoverMenuShop, HoverNewInProducts } from "./HoverMenu";
import LoginSignUp from "../../pages/register/LoginSignUp";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [loginShow, setLoginShow] = useState(true);
  const [openLoginWindow, setOpenLoginWindow] = useState(false);

  return (
    <Container>
      <header className="navbarAndSidebar">
        {openLoginWindow && (
          <LoginSignUp
            loginShow={loginShow}
            setLoginShow={setLoginShow}
            openLoginWindow={openLoginWindow}
            setOpenLoginWindow={setOpenLoginWindow}
          />
        )}
        {/* NAVBAR PART */}
        <>
          <NavbarMobi
            setOpenSidebar={setOpenSidebar}
            openSidebar={openSidebar}
          />
          {/* ROW-01 */}
          <nav className="navbarContainer">
            <div className="navbarContainerWrapper">
              {/* LEFT NAVBAR */}
              <div className="navbarContainerLeft">
                <div className="navbarContainerHamburger">
                  <Hamburger
                    toggle={setOpenSidebar}
                    toggled={openSidebar}
                    // color="#fff"
                  />
                </div>
                <div className="navbarContainerLogo">
                  <Link to="/">Exino</Link>
                </div>
              </div>
              {/* RIGHT NAVBAR */}
              <div className="navbarContainerRightItems">
                <input
                  className="navbar-search"
                  placeholder="E.g. Initials, Chokers"
                />
                <FiSearch className="navbar-icon" />
                <Link className="navbar-top-row-link" to="/help">
                  Help
                </Link>
                <Link className="navbar-top-row-link" to="/profile">
                  Profile
                </Link>
                <Link className="navbar-top-row-link" to="/ordertracking">
                  Track Order
                </Link>
                <span class="dropdownProfileMenu">
                  <CgProfile className="navbar-icon" />
                  <div class="dropdownProfileMenu-content">
                    <div className="profile-menu-container">
                      <div className="profile-menu-header">Become a member</div>
                      <div className="profile-menu">
                        <span
                          onClick={() => {
                            setOpenLoginWindow(!openLoginWindow);
                            setLoginShow(true);
                          }}
                          className="profile-menu-item"
                        >
                          Sign In
                        </span>
                        <span
                          onClick={() => {
                            setOpenLoginWindow(!openLoginWindow);
                            setLoginShow(false);
                          }}
                          className="profile-menu-item"
                        >
                          Sign Up
                        </span>
                      </div>
                    </div>
                  </div>
                </span>
                <Link
                  to="/shipping-cart"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "-6px",
                  }}
                >
                  <BiShoppingBag className="navbar-icon" />
                </Link>
                <div style={{ marginTop: "-4px" }} className="navbar-cart-item">
                  (0)
                </div>
              </div>
            </div>
          </nav>
          {/* ROW-02 */}
          <div className="navbar-row2-container">
            {navRoutes.map((item) => (
              <div key={item.name} className="navbarContainerRightItem">
                <span
                  className="link"
                  // activeClassName="activeClassNameOfSidebar"
                  // exact
                  // to={item.route}
                >
                  {!item.links && <Link to={item.route}>{item.name}</Link>}
                  {item.name === "SHOP" && (
                    <div class="dropdown">
                      <div class="dropbtn">
                        <Link to="/products">{item.name}</Link>
                      </div>
                      <div class="dropdown-content">
                        <HoverMenuShop />
                      </div>
                    </div>
                  )}
                  {item.name === "NAMES & INITIALS" && (
                    <div class="dropdown">
                      <div class="dropbtn">
                        <Link to="/products">{item.name}</Link>
                      </div>
                      <div class="dropdown-content">
                        <HoverNewInProducts />
                      </div>
                    </div>
                  )}
                  {item.name === "GIFTS" && (
                    <div class="dropdown">
                      <div class="dropbtn">
                        <Link to="/products">{item.name}</Link>
                      </div>
                      <div class="dropdown-content">
                        <HoverMenuGifts />
                      </div>
                    </div>
                  )}
                </span>
              </div>
            ))}
          </div>
        </>
        {/* SIDEBAR PART */}
        <Sidebar
          setOpenLoginWindow={setOpenLoginWindow}
          setLoginShow={setLoginShow}
          openLoginWindow={openLoginWindow}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
      </header>
    </Container>
  );
};

export default Navbar;
