import React from "react";
import Carousel from "react-elastic-carousel";
import "./_giftCarousel.scss";

const GiftCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    //   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 558, itemsToShow: 2 },
    //   { width: 1200, itemsToShow: 4 },
    { width: 660, itemsToShow: 3 },
  ];
  const productImages = [
    "https://cdn.oakandluna.com/images/Products/m_big_114-01-3219-35.jpg",
    "https://cdn.oakandluna.com/images/Products/m_big_114-01-3218-01_1.jpg",
    "https://cdn.oakandluna.com/images/Products/m_big_114-01-3218-01_2.jpg",
    "https://cdn.oakandluna.com/images/Products/m_big_114-01-3218-01_3.jpg",
    "https://cdn.oakandluna.com/images/Products/m_big_114-01-3218-01_4.jpg",
    "https://cdn.oakandluna.com/images/Products/m_big_114-01-3218-01_5.jpg",
    "https://cdn.oakandluna.com/images/Products/m_big_114-01-3218-01_6.jpg",
  ];
  return (
    <div className="giftCarousel">
      <div className="giftCarousel_header">ADD ANOTHER PIECE AS A GIFT!</div>
      <Carousel
        // showArrows={false}
        // verticalMode
        //   pagination={false}
        breakPoints={breakPoints}
        className="giftCarousel_main"
        // style={{ border: "4px solid #000" }}
      >
        {productImages.map((item, index) => (
          <div className="giftCarousel_main_cntr" key={index}>
            <img
              key={index}
              src={item}
              className="giftCarousel_main_cntr_img"
              //   height={280}
              //   width={200}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GiftCarousel;
