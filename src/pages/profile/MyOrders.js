import React from "react";
import Container from "../../components/container";
import ProfileNavAndSidebar from "../../layout/profile/sideAndNavbar";

const MyOrders = () => {
  return (
    <Container style={{ minHeight: "100vh" }}>
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <ProfileNavAndSidebar>
        <div className="ProfileNavAndSidebar_right_header">My Orders</div>
        <hr className="ProfileNavAndSidebar_right_header_hr" />
        <div className="ProfileNavAndSidebar_right_row">
          There are no orders associated with your account
        </div>
        {/* <div className="ProfileNavAndSidebar_right_row">
          <div className="ProfileNavAndSidebar_right_row_col1">First Name</div>
          <div className="ProfileNavAndSidebar_right_row_col2">Naiem</div>
        </div>
        <hr /> */}
      </ProfileNavAndSidebar>
    </Container>
  );
};

export default MyOrders;
