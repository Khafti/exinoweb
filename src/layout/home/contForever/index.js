import React from "react";
import { VscGift } from "react-icons/vsc";
import { GiExplosiveMaterials } from "react-icons/gi";
import { MdOutlineChildCare } from "react-icons/md";

const ConnectForever = () => {
  return (
    <section>
      <div className="title-connection-forever">WE KEEP IT SIMPLE, </div>
      <div className="title-connection-forever-subtitle">
        SO YOU CAN KEEP IT FOREVER
      </div>
      <div className="home-icon-txt">
        <div className="home-icon-txt_item">
          <GiExplosiveMaterials className="home-icon-txt_item_icon" />
          <p className="home-icon-txt_item_p">QUALITY</p>
          <p className="home-icon-txt_item_p">MATERIALS</p>
        </div>
        <div className="home-icon-txt_item">
          <MdOutlineChildCare className="home-icon-txt_item_icon" />
          <p className="home-icon-txt_item_p">CAREFUL</p>
          <p className="home-icon-txt_item_p">CRAFTSMANSHIP</p>
        </div>
        <div className="home-icon-txt_item">
          <VscGift className="home-icon-txt_item_icon" />
          <p className="home-icon-txt_item_p">DIRECTLY</p>
          <p className="home-icon-txt_item_p">FROM US</p>
        </div>
      </div>
      <div className="home-more-btn-container">
        <button>& MORE</button>
      </div>
    </section>
  );
};

export default ConnectForever;
