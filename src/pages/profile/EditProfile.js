import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/container";
import ProfileNavAndSidebar from "../../layout/profile/sideAndNavbar";

const EditProfile = () => {
  return (
    <Container style={{ minHeight: "100vh" }}>
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <ProfileNavAndSidebar>
        <div className="ProfileNavAndSidebar_right_header">Edit Profile</div>
        <div
          className="ProfileNavAndSidebar_right_row"
          style={{ justifyContent: "flex-end" }}
        >
          <Link to="/profile">
            <button>Back</button>
          </Link>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">First Name</div>
          <div className="ProfileNavAndSidebar_right_row_col2">
            <input />
          </div>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">Last Name</div>
          <div className="ProfileNavAndSidebar_right_row_col2">
            <input />
          </div>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">Email</div>
          <div className="ProfileNavAndSidebar_right_row_col2">
            <input />
          </div>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">
            Phone Number
          </div>
          <div className="ProfileNavAndSidebar_right_row_col2">
            <input />
          </div>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">Birthday</div>
          <div className="ProfileNavAndSidebar_right_row_col2">
            <input />
          </div>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">Gender</div>
          <div className="ProfileNavAndSidebar_right_row_col2">
            <input type="checkbox" style={{ marginRight: "6px" }} />
            Female
            <input
              type="checkbox"
              style={{ marginRight: "6px", marginLeft: "16px" }}
            />
            Male
          </div>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">
            <button
              style={{
                background: "#000",
                color: "#fff",
                padding: "15px 20px",
              }}
            >
              Save Changes
            </button>
          </div>
          <div className="ProfileNavAndSidebar_right_row_col2">
            <button
              style={{
                padding: "15px 20px",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </ProfileNavAndSidebar>
    </Container>
  );
};

export default EditProfile;
