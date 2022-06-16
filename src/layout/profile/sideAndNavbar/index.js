import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./_profileSidebar.scss";

const ProfileNavAndSidebar = (props) => {
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="ProfileNavbar">
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className="ProfileNavAndSidebar_left_header"
        >
          <div className="ProfileNavAndSidebar_left_header_logo">NF</div>
          <div
            className="ProfileNavAndSidebar_left_header_name"
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            {pathname === "/profile" && <span>My Details</span>}
            {pathname === "/profile/edit" && <span>Edit Profile</span>}
            {pathname === "/profile/my-orders" && <span>My Orders</span>}
            <FaChevronDown style={{ marginLeft: "16px" }} />
          </div>
        </div>
        {toggle && (
          <div>
            <div className="ProfileNavAndSidebar_left_row">
              <Link to="/profile">My Details</Link>
            </div>
            <div className="ProfileNavAndSidebar_left_row">
              <Link to="/profile/my-orders">My Orders</Link>
            </div>
            <div
              style={{ fontSize: "14px" }}
              className="link-app ProfileNavAndSidebar_left_row"
            >
              Sign out
            </div>
          </div>
        )}
      </div>
      <div className="ProfileNavAndSidebar">
        {/* LEFT */}
        <div className="ProfileNavAndSidebar_left">
          <div className="ProfileNavAndSidebar_left_header">
            <div className="ProfileNavAndSidebar_left_header_logo">NF</div>
            <div className="ProfileNavAndSidebar_left_header_name">
              Hey, Naiem Foysal!
            </div>
          </div>
          <hr />
          <div
            style={{
              background:
                (pathname === "/profile" || pathname === "/profile/edit") &&
                "#f8f8f8",
            }}
            className="ProfileNavAndSidebar_left_row"
          >
            <Link to="/profile">My Details</Link>
          </div>
          <div
            style={{
              background: pathname === "/profile/my-orders" && "#f8f8f8",
            }}
            className="ProfileNavAndSidebar_left_row"
          >
            <Link to="/profile/my-orders">My Orders</Link>
          </div>
          <div
            style={{ fontSize: "14px" }}
            className="link-app ProfileNavAndSidebar_left_row"
          >
            Sign out
          </div>
        </div>
        {/* RIGHT */}
        <div className="ProfileNavAndSidebar_right">{props.children}</div>
      </div>
    </>
  );
};

export default ProfileNavAndSidebar;
