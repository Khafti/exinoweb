import React from "react";
import Slider from "react-slick";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "./_colorCarousel.scss";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
}

var settings = {
  arrows: true,
  dots: false,
  //   infinite: false,
  //   speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  //   initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    //  {
    //    breakpoint: 480,
    //    settings: {
    //      slidesToShow: 1,
    //      slidesToScroll: 1,
    //    },
    //  },
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const ColorCarousel = () => {
  const slider = React.useRef(null);
  const productsData = [
    {
      color: "#F3E287",
      name: "18k gold plating",
      price: 130,
    },
    {
      color: "#B4B4B4",
      name: "925 Sterling Silver",
      price: 120,
    },
    {
      color: "#E1A98F",
      name: "18k rose gold plating",
      price: 130,
    },
    {
      color: "#E4B86A",
      name: "18k gold vermeil",
      price: 150,
    },
    {
      color: "#D6BF88",
      name: "14k solid gold",
      price: 270,
    },
    {
      color: "#DADADA",
      name: "14k white gold",
      price: 270,
    },
  ];
  return (
    <div
      className="carousel-wrapper"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <button
        style={{
          zIndex: "9",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
        onClick={() => slider?.current?.slickPrev()}
      >
        <AiOutlineLeft size={24} />
      </button>
      <div
        style={{
          //  padding: "30px",
          width: "85%",
          //  border: "1px solid #000",
        }}
      >
        <Slider
          //  style={{
          //    border: "1px solid #000",
          //  }}
          ref={slider}
          {...settings}
        >
          {productsData.map((item, index) => (
            <div key={index} className="color-container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{ background: item.color }}
                  className="color-container_color"
                />
              </div>
              <div className="color-container_enable" />
              <div className="color-container_txt">
                <div className="color-container_txt_title">{item.name}</div>
                <div className="color-container_txt_price">
                  ({`$${item.price}`})
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button
        style={{
          zIndex: "9",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
        onClick={() => slider?.current?.slickNext()}
      >
        <AiOutlineRight size={24} />
      </button>
    </div>
  );
};

export default ColorCarousel;
