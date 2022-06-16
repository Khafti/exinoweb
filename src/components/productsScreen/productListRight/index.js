import React from "react";
import "./_productListRightSide.scss";

const ProductListRightSide = ({ children }) => {
  return (
    <>
      <div className="productListRightSide-container">{children}</div>
    </>
  );
};

export default ProductListRightSide;
