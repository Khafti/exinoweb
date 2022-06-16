import React from "react";
import "./_holeContainer.scss";

const HoleContainerProductScreen = ({ children, style, className }) => {
  return (
    <div className={`products-page-hole-container ${className}`} style={style}>
      {children}
    </div>
  );
};

export default HoleContainerProductScreen;
