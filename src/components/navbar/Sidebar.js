import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Squash as Hamburger } from "hamburger-react";
import { AiOutlineQuestion } from "react-icons/ai";
import "./.Sidebar.css";

const Sidebar = ({
  openLoginWindow,
  setLoginShow,
  openSidebar,
  setOpenSidebar,
  setOpenLoginWindow,
}) => {
  const [shop, setShop] = useState(false);
  const [initials, setInitials] = useState(false);
  const [gifts, setGifts] = useState(false);

  const [tredding, setTredding] = useState(false);
  const [type, setType] = useState(false);
  const [material, setMaterial] = useState(false);
  const [collections, setCollections] = useState(false);

  const navRoutes = [
    { name: "MOTHER'S DAY", route: "/products" },
    { name: "NEW IN", route: "/products" },
    {
      name: "SHOP",
      dropdown: shop,
      setDropdown: setShop,
      links: [
        {
          name: "TRENDING",
          innerDropdown: tredding,
          setInnerDropdown: setTredding,
          underLinks: [
            {
              name: "Mother's Day",
              link: "#",
            },
            {
              name: "Medallions",
              link: "#",
            },
            {
              name: "Essentials",
              link: "#",
            },
            {
              name: "Fine Jewelry",
              link: "#",
            },
            {
              name: "Links & Chains",
              link: "#",
            },
            {
              name: "Paperclip",
              link: "#",
            },
            {
              name: "Best Sellers",
              link: "#",
            },
          ],
        },
        {
          name: "TYPE",
          innerDropdown: type,
          setInnerDropdown: setType,
          underLinks: [
            {
              name: "Necklaces",
              link: "#",
            },
            {
              name: "Bracelets",
              link: "#",
            },
            {
              name: "Rings",
              link: "#",
            },
            {
              name: "Earrings",
              link: "#",
            },
            {
              name: "Anklets",
              link: "#",
            },
            {
              name: "Men's Jewelry",
              link: "#",
            },
            {
              name: "Shop All",
              link: "#",
            },
          ],
        },
        {
          name: "MATERIAL",
          innerDropdown: material,
          setInnerDropdown: setMaterial,
          underLinks: [
            {
              name: "Solid Gold",
              link: "#",
            },
            {
              name: "Gold Vermeil",
              link: "#",
            },
            {
              name: "Gold Plated",
              link: "#",
            },
            {
              name: "Sterling Silver",
              link: "#",
            },
            {
              name: "Rose Gold Plated",
              link: "#",
            },
            {
              name: "Diamonds",
              link: "#",
            },
            {
              name: "Pearls",
              link: "#",
            },
          ],
        },
        {
          name: "COLLECTIONS",
          innerDropdown: collections,
          setInnerDropdown: setCollections,
          underLinks: [
            {
              name: "Locks & Keys",
              link: "#",
            },
            {
              name: "Bar Necklaces",
              link: "#",
            },
            {
              name: "Name Necklaces",
              link: "#",
            },
            {
              name: "Initial Jewelry",
              link: "#",
            },
            {
              name: "Harmony",
              link: "#",
            },
            {
              name: "Layered Jewelry",
              link: "#",
            },
            {
              name: "Charms",
              link: "#",
            },
          ],
        },
      ],
    },
    {
      name: "NAMES & INITIALS",
      dropdown: initials,
      setDropdown: setInitials,
      links: [
        {
          name: "Name Necklaces",
          link: "#",
        },
        {
          name: "Initial Necklaces",
          link: "#",
        },
        {
          name: "Name Rings",
          link: "#",
        },
        {
          name: "Initial Rings",
          link: "#",
        },
        {
          name: "Initial Jewelry",
          link: "#",
        },
      ],
    },
    {
      name: "GIFTS",
      dropdown: gifts,
      setDropdown: setGifts,
      links: [
        {
          name: "Mother's Day",
          link: "#",
        },
        {
          name: "Gift Guide",
          link: "#",
        },
        {
          name: "Most Gifted",
          link: "#",
        },
        {
          name: "Diamonds",
          link: "#",
        },
        {
          name: "Gold Must-Haves",
          link: "#",
        },
        {
          name: "Ready-to-ship Gifts",
          link: "#",
        },
        {
          name: "Gifts Under $150",
          link: "#",
        },
        {
          name: "Gifts Under $250",
          link: "#",
        },
        {
          name: "Push Presents",
          link: "#",
        },
        {
          name: "Gifts for Him",
          link: "#",
        },
      ],
    },
    { name: "SALE", route: "/products" },
    { name: "BLOG", route: "/blog" },
  ];

  return (
    <div
      className={`
                ${
                  openSidebar ? "translateForSidebar" : "translateForSidebarNeg"
                }
                setSidebarForToggle transform transition-all duration-300`}
    >
      {/* Top Part */}
      <div className="sidebar-top-part">
        <div className="sidebar-logo-container">
          <span className="navbarContainerLogo">
            <Link to="/">Exino</Link>
          </span>
          <Hamburger toggle={setOpenSidebar} toggled={openSidebar} />
        </div>
        <ul className="SidebarItems">
          {navRoutes.map((item, index) => (
            <li key={index} className="SidebarItem">
              {!item.route ? (
                <div className="SidebarItemLink">
                  <div
                    onClick={() => {
                      item.setDropdown(!item.dropdown);
                    }}
                    className="SidebarItemContainer"
                  >
                    <span style={{ fontWeight: item.dropdown ? "bold" : "" }}>
                      {item.name}
                    </span>
                    {item.links ? (
                      item.dropdown ? (
                        <FaMinus className="navbar-icon-sidebar" />
                      ) : (
                        <FaPlus className="navbar-icon-sidebar" />
                      )
                    ) : (
                      ""
                    )}
                  </div>
                  {item.links &&
                    item.dropdown &&
                    item.links.map((th, index) => (
                      <>
                        <div
                          key={index}
                          onClick={() => {
                            th.setInnerDropdown(!th.innerDropdown);
                          }}
                        >
                          <div className="SidebarItemContainerInner">
                            <span
                              style={{
                                fontWeight: th.innerDropdown ? "bold" : "",
                              }}
                            >
                              {th.name}
                            </span>
                            {th.underLinks ? (
                              th.innerDropdown ? (
                                <FaMinus className="navbar-icon-sidebar" />
                              ) : (
                                <FaPlus className="navbar-icon-sidebar" />
                              )
                            ) : (
                              ""
                            )}
                          </div>
                          {th.innerDropdown && (
                            <div className="SidebarItemContainerInnerMost">
                              {th.underLinks &&
                                th.underLinks.map((uli, index) => (
                                  <div
                                    className="SidebarItemContainerInnerMostItem"
                                    key={index}
                                  >
                                    {uli.name}
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      </>
                    ))}{" "}
                </div>
              ) : (
                <Link className="SidebarItemLink" to={item.route}>
                  <div
                    onClick={() => {
                      setOpenSidebar(!openSidebar);
                    }}
                    className="SidebarItemContainer"
                  >
                    <span style={{ fontWeight: item.dropdown ? "bold" : "" }}>
                      {item.name}
                    </span>
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Bottom Part */}
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-row">
          <CgProfile className="navbar-icon" />
          <span
            onClick={() => {
              setOpenSidebar(!openSidebar);
              setOpenLoginWindow(!openLoginWindow);
              setLoginShow(true);
            }}
            style={{ cursor: "pointer" }}
          >
            Sign In
          </span>
          <span style={{ margin: "0 1rem" }}>|</span>
          <span
            onClick={() => {
              setOpenSidebar(!openSidebar);
              setOpenLoginWindow(!openLoginWindow);
              setLoginShow(false);
            }}
            style={{ cursor: "pointer" }}
          >
            Sign Up
          </span>
        </div>
        <hr />
        <div className="sidebar-bottom-row">
          <AiOutlineQuestion className="navbar-icon" />
          <Link
            onClick={() => {
              setOpenSidebar(!openSidebar);
            }}
            to="/help"
          >
            NEED HELP?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
