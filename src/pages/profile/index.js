import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/container";
import ProfileNavAndSidebar from "../../layout/profile/sideAndNavbar";

const Profile = () => {
  return (
    <Container style={{ minHeight: "100vh" }}>
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <ProfileNavAndSidebar>
        <div className="ProfileNavAndSidebar_right_header">My Details</div>
        <div
          className="ProfileNavAndSidebar_right_row"
          style={{ justifyContent: "flex-end" }}
        >
          <Link to="/profile/edit">
            <button>Edit</button>
          </Link>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">First Name</div>
          <div className="ProfileNavAndSidebar_right_row_col2">Naiem</div>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">Last Name</div>
          <div className="ProfileNavAndSidebar_right_row_col2">Foysal</div>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">Email</div>
          <div className="ProfileNavAndSidebar_right_row_col2">
            naiemfoysal143907@gmail.com
          </div>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">
            Phone Number
          </div>
          <div className="ProfileNavAndSidebar_right_row_col2">
            Add Phone Number
          </div>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">Birthday</div>
          <div className="ProfileNavAndSidebar_right_row_col2">Select Date</div>
        </div>
        <hr />
        <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">Gender</div>
          <div className="ProfileNavAndSidebar_right_row_col2">Female Male</div>
        </div>
        <hr />
      </ProfileNavAndSidebar>
    </Container>
  );
};

export default Profile;
