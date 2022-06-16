import React from "react";
import "./_sustainabilityContent.scss";

const SustainabilityContent = ({
  title,
  para1,
  para2,
  para3,
  para4,
  para5,
  para6,
  para7,
  img,
  imgLeft = false,
}) => {
  return (
    <div
      className={`sustainabilityContent ${
        imgLeft
          ? "sustainabilityContent-setImgLeft"
          : "sustainabilityContent-setImgRight"
      }`}
    >
      {/* Left */}
      <div className="sustainabilityContent_Left">
        <div className="sustainabilityContent_Left_Title">{title}</div>
        <div className="sustainabilityContent_Left_Paragraph">{para1}</div>
        <div className="sustainabilityContent_Left_Paragraph">{para2}</div>
        <div className="sustainabilityContent_Left_Paragraph">{para3}</div>
        <div className="sustainabilityContent_Left_Paragraph">{para4}</div>
        <div className="sustainabilityContent_Left_Paragraph">{para5}</div>
        <div className="sustainabilityContent_Left_Paragraph">{para6}</div>
        <div className="sustainabilityContent_Left_Paragraph">{para7}</div>
      </div>
      {/* Right */}
      <div
        className={`sustainabilityContent_Right ${
          imgLeft
            ? "sustainabilityContent-imgWhenLeft"
            : "sustainabilityContent-imgWhenRight"
        }`}
      >
        <img src={img} alt="images" />
      </div>
    </div>
  );
};

export default SustainabilityContent;
