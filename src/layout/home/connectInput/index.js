import React from "react";

const ConnectInput = () => {
  return (
    <section className="home-contact-input">
      <div className="home-contact-input_title">
        Get 10% off your first order
      </div>
      <div className="home-contact-input_container">
        <input placeholder="Email" className="home-contact-input_field" />
        <button className="home-contact-input_btn">SUBMIT</button>
      </div>
    </section>
  );
};

export default ConnectInput;
