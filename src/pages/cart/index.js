import React, { useState } from "react";
import Container from "../../components/container";
// import GiftCarousel from "../../layout/cart/giftCarousel";
import "./_cart.scss";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShippingCart = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  return (
    <Container style={{ minHeight: "100vh" }}>
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="cart">
        {/* LEFT */}
        <div className="cart_left">
          {/* Cart-Item */}
          <div className="cart_left_item">
            <img
              className="cart_left_item_img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-12-3426-09.jpg"
              alt="images"
            />
            <div className="cart_left_item_info">
              <div className="cart_left_item_info_name">
                MELODY WHITE PEARL HOOP EARRINGS- GOLD PLATED
              </div>
              <div className="cart_left_item_info_type">
                MATERIAL: 18k Gold Plating
              </div>
              <div className="cart_left_item_info_price">$120</div>
              <div className="cart_left_item_info_remove">REMOVE</div>
            </div>
          </div>
          {/* Cart-Item */}
          <div className="cart_left_item">
            <img
              className="cart_left_item_img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-12-3426-09.jpg"
              alt="images"
            />
            <div className="cart_left_item_info">
              <div className="cart_left_item_info_name">
                MELODY WHITE PEARL HOOP EARRINGS- GOLD PLATED
              </div>
              <div className="cart_left_item_info_type">
                MATERIAL: 18k Gold Plating
              </div>
              <div className="cart_left_item_info_price">$120</div>
              <div className="cart_left_item_info_remove">REMOVE</div>
            </div>
          </div>
          {/* GIFT CAROUSEL */}
          {/* <GiftCarousel /> */}
          {/* SUBTOTAL */}
          <div className="cart_left_btmBox">
            <div className="cart_left_btmBox_item">
              <span className="cart_left_btmBox_item_left">SUBTOTAL:</span>
              <span className="cart_left_btmBox_item_right">$300</span>
            </div>
            <div className="cart_left_btmBox_item_cpn_title">
              GOT A COUPON CODE? +
            </div>
            <div className="cart_left_btmBox_item_cpn">
              <input className="cart_left_btmBox_item_cpn_input" />
              <button className="cart_left_btmBox_item_cpn_btn">APPLY</button>
            </div>
          </div>
          <span className="cart_left_continue_btn">CONTINUE SHOPPING</span>
        </div>
        {/* RIGHT */}
        <div className="cart_right">
          {/* First Box */}
          <div className="cart_right_first_box">
            <div className="cart_right_first_box_header">
              CHOOSE SHIPPING METHOD
            </div>
            <div className="cart_right_first_box_msg">
              ✔ ALL METHODS ARE TRACKED & INSURED
            </div>
            {/* 1st */}
            <div
              className={
                checked1
                  ? "cart_right_first_box_item cart_right_first_box_boxShadow"
                  : "cart_right_first_box_item"
              }
              onClick={() => {
                setChecked1(true);
                setChecked2(false);
              }}
            >
              <div className="cart_right_first_box_item_left">
                {/* <input
                  defaultChecked={checked1}
                  onChange={() => {
                    setChecked1(!checked1);
                    setChecked2(!checked2);
                  }}
                  className="cart_right_first_box_item_left_checkbox"
                  type="checkbox"
                /> */}
                <div
                  className="cart_right_first_box_item_left_checkbox"
                  onClick={() => {
                    setChecked1(true);
                    setChecked2(false);
                  }}
                >
                  {checked1 && <FaCheckCircle style={{ color: "green" }} />}
                  {!checked1 && <BsCircle />}
                </div>
                <div className="cart_right_first_box_item_left_ctnr">
                  <div className="cart_right_first_box_item_left_ctnr_title">
                    Worldwide Express Shipping:
                  </div>
                  <div className="cart_right_first_box_item_left_ctnr_date">
                    Get it Thu, May 19 - Tue, May 24
                  </div>
                  <div className="cart_right_first_box_item_left_ctnr_info">
                    All shipping charges are included
                  </div>
                </div>
              </div>
              <div className="cart_right_first_box_item_right">$20</div>
            </div>
            {/* 2nd */}
            <div
              onClick={() => {
                setChecked1(false);
                setChecked2(true);
              }}
              className={
                checked2
                  ? "cart_right_first_box_item cart_right_first_box_boxShadow"
                  : "cart_right_first_box_item"
              }
            >
              <div className="cart_right_first_box_item_left">
                {/* <input
                  defaultChecked={checked2}
                  onChange={() => {
                    setChecked1(!checked1);
                    setChecked2(!checked2);
                  }}
                  className="cart_right_first_box_item_left_checkbox"
                  type="checkbox"
                /> */}
                <div
                  onClick={() => {
                    setChecked1(false);
                    setChecked2(true);
                  }}
                  className="cart_right_first_box_item_left_checkbox"
                >
                  {checked2 && <FaCheckCircle style={{ color: "green" }} />}
                  {!checked2 && <BsCircle />}
                </div>
                <div className="cart_right_first_box_item_left_ctnr">
                  <div className="cart_right_first_box_item_left_ctnr_title">
                    US & EU Standard Shipping:
                  </div>
                  <div className="cart_right_first_box_item_left_ctnr_date">
                    Get it Sun, May 29 - Wed, Jun 1
                  </div>
                  <div className="cart_right_first_box_item_left_ctnr_info">
                    All shipping charges are included
                  </div>
                </div>
              </div>
              <div className="cart_right_first_box_item_right">FREE</div>
            </div>
            <div className="cart_right_first_box_images">
              <img
                className="cart_right_first_box_image"
                src="https://cdn.oakandluna.com/images/site/usps_ar3.png"
                alt=""
              />
              <img
                className="cart_right_first_box_image"
                src="https://cdn.oakandluna.com/images/site/fedex_ar3.png"
                alt=""
              />
              <img
                className="cart_right_first_box_image"
                src="https://cdn.oakandluna.com/images/site/DHL_ar3.png"
                alt=""
              />
            </div>
          </div>
          {/* Second Box */}
          <div className="cart_right_second_box">
            <div className="cart_right_second_box_item">
              <span className="cart_right_second_box_item_left">
                SUBTOTAL (2)
              </span>
              <span className="cart_right_second_box_item_right">$300</span>
            </div>
            <div className="cart_right_second_box_item">
              <span className="cart_right_second_box_item_left">SHIPPING:</span>
              <span className="cart_right_second_box_item_right">$20</span>
            </div>
            <div className="cart_right_second_box_item">
              <span className="cart_right_second_box_item_left">TAX:</span>
              <span className="cart_right_second_box_item_right">
                AT CHECKOUT
              </span>
            </div>
            <div className="cart_right_second_box_item">
              <span className="cart_right_second_box_item_left">
                ORDER TOTAL:
              </span>
              <span className="cart_right_second_box_item_right">$320</span>
            </div>
            <Link to="/checkout">
              <button className="cart_right_second_box_btn">
                CONTINUE TO CHECKOUT
              </button>
            </Link>
            <div className="cart_right_second_box_images">
              <img
                src="https://www.oakandluna.com/images/site/visa_i.png"
                alt=""
              />
              <img
                src="https://www.oakandluna.com/images/site/mastercard_i.png"
                alt=""
              />
              <img
                src="https://www.oakandluna.com/images/site/amex_i.png"
                alt=""
              />
              <img
                src="https://www.oakandluna.com/images/site/paypal_i.png"
                alt=""
              />
              <img
                src="https://www.oakandluna.com/images/site/klarna_i.png"
                alt=""
              />
              <img
                src="https://www.oakandluna.com/images/site/apple_pay_i.png"
                alt=""
              />
              <img
                src="https://www.oakandluna.com/images/site/diners_club_i.png"
                alt=""
              />
              <img
                src="https://www.oakandluna.com/images/site/discover_i.png"
                alt=""
              />
              <img
                src="https://www.oakandluna.com/images/site/ssl_i.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShippingCart;
