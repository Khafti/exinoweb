import React from "react";
import "./_blogContent.scss";

const BlogContent = ({ title, date, para, img }) => {
  return (
    <div className="BlogContent">
      {/* Left */}
      <div className="BlogContent_Left">
        <div className="BlogContent_Left_Title">{title}</div>
        <div className="BlogContent_Left_Date">{date}</div>
        <div className="BlogContent_Left_Paragraph">{para}</div>
        <button className="BlogContent_Left_Button">Read More</button>
      </div>
      {/* Right */}
      <div className="BlogContent_Right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default BlogContent;
