import React from "react";
import "./_title.scss";

const TitleProductsScreen = ({ children, style, className }) => {
  return (
    <div className="products-page-title">
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  );
};

export default TitleProductsScreen;
