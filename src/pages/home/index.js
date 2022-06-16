import React from "react";
import Container from "../../components/container";
import ProductSlider from "../../layout/home/productSlider/productSlider";
import "./_home.scss";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";

const Home = () => {
  return (
    <Container>
      <section className="banner-1" />

      <section className="banner-direction">
        <div className="banner-2" />
        <div className="banner-3" />
      </section>

      <section className="home-trending-section">
        <div className="title-trending">TRENDING JEWELRY</div>
        <div>
          <ProductSlider />
        </div>
      </section>

      <section className="banner-4" />

      <section className="banner-direction">
        <div className="banner-5" />
        <div className="banner-6" />
      </section>

      <section className="banner-direction">
        <div className="banner-7" />
        <div className="banner-8" />
      </section>

      <hr style={{ margin: "50px 0" }} />
      <ConnectForever />
      <hr />

      <TrustPilot />

      <hr />

      <ConnectInput />
    </Container>
  );
};

export default Home;
