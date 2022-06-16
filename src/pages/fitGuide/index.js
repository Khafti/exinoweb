import React from "react";
import Container from "../../components/container";
import ConnectInput from "../../layout/home/connectInput";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import "./_fitGuide.scss";

const FitGuide = () => {
  return (
    <Container className="fitGuide">
      {" "}
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="fitGuide_header">JEWELRY FIT GUIDE</div>
      <div className="fitGuide_images">
        <div className="fitGuide-banner fitGuide-img1">
          <button>NECKLACES</button>
        </div>
        <div className="fitGuide-banner fitGuide-img2">
          <button>BRACELETS</button>
        </div>
        <div className="fitGuide-banner fitGuide-img3">
          <button>RINGS</button>
        </div>
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

export default FitGuide;
