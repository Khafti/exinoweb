import React from "react";
import { navRoutes } from "./NavLinks";
import "./hoverMenu.css";

export const HoverMenuGifts = () => {
  return (
    <div className="hoverMenu">
      <div className="hoverMenu-container">
        <div className="menu-not-underLinks-left" style={{ display: "flex" }}>
          <div>
            {navRoutes[4].links.slice(0, 8).map((item, index) => (
              <div>
                <div className="hoverMenuSubtitle" key={index}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginLeft: "80px" }}>
            {navRoutes[4].links.slice(8, 10).map((item, index) => (
              <div>
                <div className="hoverMenuSubtitle" key={index}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hoverMenu-right">
          <img
            src="https://cdn.oakandluna.com/images/site/1_DD_gifting1234.jpg"
            alt=""
            className="hoverMenuImg"
          />
          <div className="hoverMenu-Img-tile">Gifts with Style</div>
          <div className="hoverMenu-Img-subtitle">SHOP MOST GIFTED </div>
        </div>
      </div>
    </div>
  );
};

export const HoverMenuShop = () => {
  return (
    <div className="hoverMenu">
      <div className="hoverMenu-container">
        <div className="hoverMenu-left">
          {navRoutes[2].links.map((item, index) => (
            <div>
              <div className="hoverMenuTitle" key={index}>
                {item.name}
              </div>
              <div>
                {item.underLinks.map((undl, index) => (
                  <div className="hoverMenuSubtitle" key={index}>
                    {undl.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="hoverMenu-right">
          <img
            src="https://cdn.oakandluna.com/images/site/1_DD_Jewelry1234.jpg"
            alt=""
            className="hoverMenuImg"
          />
          <div className="hoverMenu-Img-tile">All Things Pretty</div>
          <div className="hoverMenu-Img-subtitle">SHOP DIAMOND COLLECTION</div>
        </div>
      </div>
    </div>
  );
};

export const HoverNewInProducts = () => {
  return (
    <div className="hoverMenu">
      <div className="hoverMenu-container">
        <div className="menu-not-underLinks-left">
          {navRoutes[3].links.map((item, index) => (
            <div>
              <div className="hoverMenuSubtitle" key={index}>
                {item.name}
              </div>
            </div>
          ))}
        </div>
        <div className="hoverMenu-right">
          <img
            src="https://cdn.oakandluna.com/images/site/DD_name_jewelry1223.jpg"
            alt=""
            className="hoverMenuImg"
          />
          <div className="hoverMenu-Img-tile">Celebrate You</div>
          <div className="hoverMenu-Img-subtitle">
            SHOP NAME NECKLACE COLLECTION
          </div>
        </div>
      </div>
    </div>
  );
};
