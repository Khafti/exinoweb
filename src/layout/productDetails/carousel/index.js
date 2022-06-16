import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./_carousel.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const imagesData = [
  {
    img: "https://cdn.oakandluna.com/images/Products/m_big_110-12-3426-09.jpg",
  },
  {
    img: "https://cdn.oakandluna.com/images/Products/m_big_110-12-3427-09.jpg",
  },
  {
    img: "https://cdn.oakandluna.com/images/Products/m_big_110-01-3381-09.jpg",
  },
  {
    img: "https://cdn.oakandluna.com/images/Products/m_big_110-01-3380-09.jpg",
  },
];

const CarouselProductDetails = () => {
  return (
    <div className="CarouselProductDetails">
      <div className="CarouselProductDetails_header">
        CUSTOMERS LOVE TO MIX AND MATCH WITH
      </div>
      {/* For Desktop */}
      <div className="CarouselProductDetails_images">
        {imagesData.map((item, index) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              className="CarouselProductDetails_image"
              key={index}
              src={item.img}
              alt=""
            />
            <div className="CarouselProductDetails_txt">
              FARAH CUBAN LINK CHAIN NECKLACE{" "}
            </div>
            <div className="CarouselProductDetails_price">$ 200</div>
          </div>
        ))}
      </div>
      {/* For Laptop/tab */}
      <div className="productSliderForTab">
        <AutoplaySlider className="productSlider" cancelOnInteraction={true}>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img className="productSlider-img" src={imagesData[0].img} alt="" />
            <img className="productSlider-img" src={imagesData[1].img} alt="" />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img className="productSlider-img" src={imagesData[2].img} alt="" />
            <img className="productSlider-img" src={imagesData[3].img} alt="" />
          </div>
        </AutoplaySlider>
      </div>
      {/* For Mobile */}
      <div className="productSliderForMobile">
        <AutoplaySlider className="productSlider">
          {imagesData.map((item, index) => (
            <div
              key={index}
              style={{ background: "#fff" }}
              className="productSlider-img-container"
            >
              <img className="productSlider-img" src={item.img} alt="" />
            </div>
          ))}
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default CarouselProductDetails;
