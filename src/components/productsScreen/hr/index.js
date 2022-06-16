import React from "react";
import "./_hr.scss";

const HrProductsScreen = ({ style, className }) => {
  return (
    <div className="products-page-hr">
      <div className={className} style={style}>
        <hr />
      </div>
    </div>
  );
};

export default HrProductsScreen;
