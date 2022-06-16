import React, { useState } from "react";
import Magnifier from "react-magnifier";
import { GrDown, GrRefresh } from "react-icons/gr";
import { AiOutlineFileProtect } from "react-icons/ai";
import Container from "../../components/container";
import StarRatings from "react-star-ratings";
// import ReactImageMagnify from "react-image-magnify";
import ProductDescription from "../../layout/productDetails/productDescription";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";
import CustomerReview from "../../layout/productDetails/customerReview";
import CarouselProductDetails from "../../layout/productDetails/carousel";
import ColorCaurosel from "../../layout/productDetails/colorCarousel/ColorCarousel";
import CheckboxItems from "../../layout/productDetails/checkBoxItems";
import "./_productDetail.scss";
import GalleryImgs from "../../layout/productDetails/galleryImgs";

const ProductDetail = () => {
  // 3rd select feild setup
  const [initialValue1, setInitialValue1] = useState(false);
  const [initialValue2, setInitialValue2] = useState(false);
  const [initialValue3, setInitialValue3] = useState(false);

  const [initialNumValue, setInitialNumValue] = useState([
    "Select1",
    "Select2",
    "Select3",
  ]);

  console.log("initialNumValue:>>", initialNumValue);

  const upgradeDiamondArray = ["Yes", "No"];

  const productImages = [
    "https://cdn.oakandluna.com/images/Products/m_big_110-01-3063-25.jpg",
    "https://cdn.oakandluna.com/images/Products/m_big_110-01-3063-25_1.jpg",
    "https://cdn.oakandluna.com/images/Products/m_big_110-01-3063-25_3.jpg",
    "https://cdn.oakandluna.com/images/Products/m_big_110-01-3063-25_4.jpg",
    "https://cdn.oakandluna.com/images/Products/m_big_110-01-2208-33_3.jpg",
    "	https://cdn.oakandluna.com/images/Products/m_big_110-01-2208-33_3.jpg",
  ];

  const initialsNumValueArray = [
    {
      name: 1,
      feild: [
        {
          id: 1,
          selectFeild: "1 initial",
          dropdown: initialValue1,
          setDropdown: setInitialValue1,
          value: ["A", "B", "C"],
        },
      ],
    },
    {
      name: 2,
      feild: [
        {
          id: 1,
          dropdown: initialValue1,
          setDropdown: setInitialValue1,
          selectFeild: "1 initial",
          value: ["A", "B", "C"],
        },
        {
          id: 2,
          dropdown: initialValue2,
          setDropdown: setInitialValue2,
          selectFeild: "2 initials",
          value: ["A", "B", "C"],
        },
      ],
    },
    {
      name: 3,
      feild: [
        {
          id: 1,
          dropdown: initialValue1,
          setDropdown: setInitialValue1,
          selectFeild: "1 initial",
          value: ["A", "B", "C"],
        },
        {
          id: 2,
          dropdown: initialValue2,
          setDropdown: setInitialValue2,
          selectFeild: "2 initials",
          value: ["A", "B", "C"],
        },
        {
          id: 3,
          dropdown: initialValue3,
          setDropdown: setInitialValue3,
          selectFeild: "3 initials",
          value: ["A", "B", "C"],
        },
      ],
      dropdown: initialValue3,
      setDropdown: setInitialValue3,
    },
  ];

  const [img, setImg] = useState(productImages[0]);

  // 1st select feild setup
  const [upgradeDiamond, setUpgradeDiamond] = useState(false);
  const [upgradeDiamondValue, setUpgradeDiamondValue] = useState("Yes");

  const handleSelect1 = () => {
    setUpgradeDiamond(!upgradeDiamond);
  };
  const handleSelect1Value = (item) => {
    setUpgradeDiamondValue(item);
  };

  // const handleSelectFeild3 = (value, index) => {
  //   console.log("Index:>>", index);
  //   let newArr = [...initialNumValue];
  //   newArr[index] = value;
  //   setInitialNumValue(newArr);
  // };

  // 2nd select feild setup
  const [initialsNum, setInitialsNum] = useState(false);
  const [initialsNumValue, setInitialsNumValue] = useState(
    initialsNumValueArray[0].name
  );

  const handleSelect2 = () => {
    setInitialsNum(!initialsNum);
  };
  const handleSelect2Value = (item) => {
    setInitialsNumValue(item);
  };

  return (
    <Container>
      <div className="productDetails">
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <h1 style={{ paddingTop: "164px" }} />

        <div className="productDetails_container">
          {/* Left Side */}
          <section className="productDetails_left">
            <div className="productDetails_left_side_gallery">
              <div className="desktopShowImageGallery">
                {productImages.map((item, index) => (
                  <img
                    onClick={() => {
                      setImg(item);
                    }}
                    key={index}
                    src={item}
                    alt=""
                    style={{ borderColor: item === img ? "#000" : "#F7F7F7" }}
                  />
                ))}
              </div>
              <div className="tabletShowImageGallery">
                <GalleryImgs
                  img={img}
                  setImg={setImg}
                  productImages={productImages}
                />
              </div>
            </div>
            <div className="MagnifierLaptop">
              <Magnifier
                className="productDetails_left_magnifing_img"
                zoomFactor={1}
                mgWidth={224}
                mgHeight={224}
                src={img}
                width={"100%"}
                height={"45vw"}
                style={{ objectFit: "cover", maxHeight: "600px" }}
              />
            </div>
            <div className="MagnifierMobi">
              <Magnifier
                className="productDetails_left_magnifing_img"
                zoomFactor={1}
                mgWidth={224}
                mgHeight={224}
                src={img}
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover", maxHeight: "600px" }}
              />
            </div>
          </section>
          {/* Right Side */}
          <section className="productDetails_right">
            <div className="productDetails_right_header">
              INEZ INITIAL NECKLACE WITH DIAMONDS - 14K SOLID GOLD
            </div>
            <div className="productDetails_right_value">
              <div className="productDetails_right_value_price">$270</div>
              <div className="productDetails_right_value_rating">
                <div>
                  <StarRatings
                    rating={4.6}
                    starDimension="18px"
                    starSpacing="1px"
                    starRatedColor="#000"
                    name="review1"
                  />
                  <span className="productDetails_right_value_rating_value">
                    4.6
                  </span>
                </div>
                <div className="productDetails_right_value_rating_total">
                  81 reviews
                </div>
              </div>
            </div>
            <div className="productDetails_right_slider">
              <ColorCaurosel />
            </div>
            {/* Select - 01 */}
            <div style={{ marginTop: "2.5rem" }} />
            <div
              onClick={handleSelect1}
              className="productDetails_right_select"
            >
              <div className="productDetails_right_select_left">
                <div className="productDetails_right_select_title">
                  Upgrade with a diamond?
                </div>
                <div className="productDetails_right_select_value">
                  {upgradeDiamondValue}
                </div>
              </div>
              <GrDown />
            </div>
            {upgradeDiamond && (
              <div className="productDetails_right_select_option">
                {upgradeDiamondArray.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleSelect1Value(item);
                      handleSelect1();
                    }}
                    style={{
                      background: item === upgradeDiamondValue && "#F4EDE7",
                    }}
                    className="productDetails_right_select_option_value"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
            {/* Select - 02 */}
            <div style={{ marginTop: "2.5rem" }} />
            <div
              onClick={handleSelect2}
              className="productDetails_right_select"
            >
              <div className="productDetails_right_select_left">
                <div className="productDetails_right_select_title">
                  Select number of initials (1-8):
                </div>
                <div className="productDetails_right_select_value">
                  {initialsNumValue}
                </div>
              </div>
              <GrDown />
            </div>
            {initialsNum && (
              <div className="productDetails_right_select_option">
                {initialsNumValueArray.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleSelect2Value(item.name);
                      handleSelect2();
                    }}
                    style={{
                      background: item.name === initialsNumValue && "#F4EDE7",
                    }}
                    className="productDetails_right_select_option_value"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
            {/* Select - 03 */}
            {/* Initials - 01 */}
            {/* {initialsNumValueArray[initialsNumValue - 1].feild.map(
              (item, index) => (
                <div key={index}>
                  <div style={{ marginTop: "2.5rem" }} />
                  <div
                    onClick={() => {
                      item.setDropdown(!item.dropdown);
                    }}
                    className="productDetails_right_select"
                  >
                    <div className="productDetails_right_select_left">
                      <div className="productDetails_right_select_title">
                        {item.selectFeild}
                      </div>
                      <div className="productDetails_right_select_value">
                        {initialNumValue[item.id - 1]}
                      </div>
                    </div>
                    <GrDown />
                  </div>
                  {item.dropdown && (
                    <div className="productDetails_right_select_option">
                      {item.value.map((i, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            handleSelectFeild3(i, 0);
                            item.setDropdown(!item.dropdown);
                          }}
                          style={{
                            background:
                              item === upgradeDiamondValue && "#F4EDE7",
                          }}
                          className="productDetails_right_select_option_value"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            )} */}
            {/* Select - Chain length: */}
            <div style={{ marginTop: "2.5rem" }} />
            <div
              style={{
                textAlign: "end",
                fontSize: "13px",
                cursor: "pointer",
                marginBottom: "4px",
              }}
            >
              Size guide
            </div>
            <div
              className="productDetails_right_select"
              style={{ border: 0, background: "#F8F8F8" }}
            >
              <div className="productDetails_right_select_left">
                <div className="productDetails_right_select_title">
                  Chain length:
                </div>
                <div className="productDetails_right_select_value">
                  14" - 16" adjustable
                </div>
              </div>
              <GrDown />
            </div>
            {/* Checkbox Item */}
            <CheckboxItems />
            <div className="productDetails_right_payment">
              <div className="productDetails_right_payment_top">
                <div className="productDetails_right_payment_top_title">
                  Subtotal:
                </div>
                <div className="productDetails_right_payment_top_title">
                  $270
                </div>
              </div>
              <button className="productDetails_right_payment_btn">
                ADD TO BAGG
              </button>
              <div className="productDetails_right_payment_subtitle">
                Last Chance to Get Mother’s Day Gifts on Time
              </div>
              <div className="productDetails_right_payment_bottom">
                <div className="productDetails_right_payment_bottom_info">
                  <GrRefresh style={{ marginRight: "8px" }} size={24} /> 60-day
                  extended returns
                </div>
                <div className="productDetails_right_payment_bottom_info">
                  <AiOutlineFileProtect
                    style={{ marginRight: "8px" }}
                    size={24}
                  />{" "}
                  2 years warranty
                </div>
              </div>
            </div>
          </section>
        </div>
        <ProductDescription />
      </div>
      <CarouselProductDetails />
      <CustomerReview />
      <hr style={{ margin: "50px 0" }} />
      <ConnectForever />
      <hr />
      <TrustPilot />
      <hr />
      <ConnectInput />
    </Container>
  );
};

export default ProductDetail;
