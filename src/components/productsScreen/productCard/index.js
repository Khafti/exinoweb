import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_productCard.scss";

const ProductCard = ({ productData }) => {
  const [image, setImage] = useState(productData.type[0].img);
  const [color, setColor] = useState(productData.type[0].color);

  return (
    <div className="productCard">
      <Link to="/product-details">
        <img src={image} alt="productImage" className="product-image" />
      </Link>
      <div className="productCard_colorChoice">
        {productData.type.length > 4 &&
          productData.type.slice(0, 4).map((item, index) => (
            <>
              <div
                style={{ background: item.color }}
                className="productCard_colorChoice_Item"
                onClick={() => {
                  setImage(item.img);
                  setColor(item.color);
                }}
              >
                {color === item.color && (
                  <div className="productCard_color_active" />
                )}
              </div>
            </>
          ))}
        {productData.type.length <= 4 &&
          productData.type.map((item, index) => (
            <>
              <div
                style={{ background: item.color }}
                className="productCard_colorChoice_Item"
                onClick={() => {
                  setImage(item.img);
                  setColor(item.color);
                }}
              >
                {color === item.color && (
                  <div className="productCard_color_active" />
                )}
              </div>
            </>
          ))}
        {productData.type.length > 4 && (
          <div className="productCard_colorChoice_Item productCard_colorChoice_more">
            +
          </div>
        )}
      </div>
      <div className="productCard_productName">
        TYRA INITIAL MEDALLION dfff vdfdsgs
      </div>
      <div className="productCard_price">$180</div>
    </div>
  );
};

export default ProductCard;
