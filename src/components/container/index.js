import React from "react";
import "./_container.scss";

const Container = ({ children, style, className }) => {
  return (
    <div className="ecommerce__container">
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Container;
