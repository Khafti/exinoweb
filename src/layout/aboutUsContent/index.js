import React from "react";
import "./_aboutContent.scss";

const AboutUsContent = ({ title, para, img, imgLeft = false }) => {
  return (
    <div
      className={`aboutUsContent ${
        imgLeft ? "aboutUsContent-setImgLeft" : "aboutUsContent-setImgRight"
      }`}
    >
      {/* Left */}
      <div className="aboutUsContent_Left">
        <div className="aboutUsContent_Left_Title">{title}</div>
        <div className="aboutUsContent_Left_Paragraph">{para}</div>
      </div>
      {/* Right */}
      <div
        className={`aboutUsContent_Right ${
          imgLeft ? "aboutUsContent-imgWhenLeft" : "aboutUsContent-imgWhenRight"
        }`}
      >
        <img src={img} alt="images" />
      </div>
    </div>
  );
};

export default AboutUsContent;
