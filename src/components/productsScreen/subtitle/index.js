import React from "react";
import "./_subtitle.scss";

const SubtitleProductScreen = ({ children, style, className }) => {
  return (
    <div className="products-page-subtitle">
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  );
};

export default SubtitleProductScreen;
