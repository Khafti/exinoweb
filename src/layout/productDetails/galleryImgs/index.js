import React from "react";
import Slider from "react-slick";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

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
  centerMode: true,
  arrows: true,
  dots: false,
  //   infinite: false,
  //   speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  //   initialSlide: 0,
  responsive: [
    {
      breakpoint: 1524,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const GalleryImgs = ({ productImages, img, setImg }) => {
  const slider = React.useRef(null);
  return (
    <div
      className=""
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
        <Slider ref={slider} {...settings}>
          {productImages.map((item, index) => (
            <div key={index}>
              <img
                onClick={() => {
                  setImg(item);
                }}
                key={index}
                src={item}
                //  height={80}
                //  width={10}
                alt=""
                style={{
                  borderColor: item === img ? "#000" : "#F7F7F7",
                  width: "90%",
                  height: "80px",
                  objectFit: "cover",
                }}
              />
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

export default GalleryImgs;
