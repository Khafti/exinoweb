import React from "react";
import Container from "../../components/container";
import ConnectInput from "../../layout/home/connectInput";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import "./_ordertracking.scss";

const Ordertracking = () => {
  return (
    <Container className="ordertracking">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="ordertracking_title">ORDER STATUS</div>
      <div style={{ padding: "35px 20px" }}>
        <div className="ordertracking_subtitle">
          No need to wait by your window!
        </div>
        <div className="ordertracking_subtitle">
          Enter your email address and the order number you received in your
          confirmation email to see when your jewelry should arrive.
        </div>
      </div>
      <div className="ordertracking_container">
        <div className="ordertracking_container_name">Order Number:</div>
        <div>
          <input className="ordertracking_container_input" />
        </div>
      </div>
      <div className="ordertracking_container">
        <div className="ordertracking_container_name">Email address:</div>
        <div>
          <input className="ordertracking_container_input" />
        </div>
      </div>
      <div className="ordertracking_btn_container">
        <input className="ordertracking_btn" value="CHECK ORDER STATUS" />
      </div>

      <hr style={{ margin: "50px 0" }} />
      <ConnectForever />
      <hr />
      <TrustPilot />
      <hr />
      <ConnectInput />
    </Container>
  );
};

export default Ordertracking;
