import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Container from "../container";
import "./_footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const [meet, setMeet] = useState(false);
  const [experience, setExperience] = useState(false);
  const [support, setSupport] = useState(false);

  const footerData = [
    {
      id: 1,
      header: "MEET US",
      item1: {
        name: "About Us",
        link: "/about-us",
      },
      item2: {
        name: "Blog",
        link: "/blog",
      },
      item3: {
        name: "Fit Guide",
        link: "/fit-guide",
      },
      item4: {
        name: "Collaborations",
        link: "/collaborations",
      },
      item5: {
        name: "Sustainability",
        link: "/sustainability",
      },
      item6: {
        name: "",
        link: "/",
      },
      dropdown: meet,
      setDropdown: setMeet,
    },
    {
      id: 2,
      header: "EXPERIENCE",
      item1: {
        name: "Oak & Luna Reviews",
        link: "/reviews",
      },
      item2: {
        name: "Track My Order",
        link: "/ordertracking",
      },
      item3: {
        name: "Terms & Conditions",
        link: "/terms-conditions",
      },
      item4: {
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      item5: {
        name: "",
        link: "/",
      },
      item6: {
        name: "",
        link: "/",
      },
      dropdown: experience,
      setDropdown: setExperience,
    },
    {
      id: 3,
      header: "CUSTOMER SUPPORT",
      item1: {
        name: "Help Center",
        link: "/help",
      },
      item2: {
        name: "Shipping Information",
        link: "/shipping-information",
      },
      item3: {
        name: "Payment Policy",
        link: "/payment-policy",
      },
      item4: {
        name: "Return Policy",
        link: "/return-policy",
      },
      item5: {
        name: "Jewelry Care",
        link: "/jewelryCare",
      },
      item6: {
        name: "Warranty",
        link: "/warranty",
      },
      dropdown: support,
      setDropdown: setSupport,
    },
  ];
  return (
    <Container>
      <hr style={{ marginBottom: "4rem" }} />
      {/* Social Icon Only for tab & M0bile Start */}
      <div className="footer_soci_icon_mobi">
        <FaFacebookF className="footer_soci_icon_mobi_icon" />
        <FaTwitter className="footer_soci_icon_mobi_icon" />
        <BsInstagram className="footer_soci_icon_mobi_icon" />
        <FaPinterestP className="footer_soci_icon_mobi_icon" />
      </div>
      {/* Social Icon Only for tab & M0bile End */}
      <div className="footer">
        {footerData.map((item, index) => (
          <div key={index} className="footer_col">
            <div className="footer_col_header">{item.header}</div>
            <div className="footer_col_item">
              <Link to={item.item1.link}> {item.item1.name}</Link>
            </div>
            <div className="footer_col_item">
              <Link to={item.item2.link}> {item.item2.name}</Link>
            </div>
            <div className="footer_col_item">
              <Link to={item.item3.link}> {item.item3.name}</Link>
            </div>
            <div className="footer_col_item">
              <Link to={item.item4.link}> {item.item4.name}</Link>
            </div>
            <div className="footer_col_item">
              <Link to={item?.item5?.link}> {item?.item5?.name}</Link>
            </div>
            <div className="footer_col_item">
              <Link to={item?.item6?.link}>{item?.item6?.name}</Link>
            </div>
          </div>
        ))}
        <div className="footer_col footer_col_social">
          <FaFacebookF className="footer_col_icon" />
          <FaTwitter className="footer_col_icon" />
          <BsInstagram className="footer_col_icon" />
          <FaPinterestP className="footer_col_icon" />
        </div>
      </div>
      {/* Footer set only for mobile screen start*/}
      <div className="footer_mobi">
        {footerData.map((item, index) => (
          <div key={index}>
            <div
              className="footer_mobi_item"
              onClick={() => {
                item.setDropdown(!item.dropdown);
              }}
            >
              <div
                className={
                  !item.dropdown
                    ? "footer_mobi_item_header"
                    : "footer_mobi_item_header-bold"
                }
              >
                {item.header}
              </div>
              <div>{!item.dropdown ? <FaChevronDown /> : <FaChevronUp />}</div>
            </div>
            <div
              className={`footer_mobi_item_container transition-all duration-200 ${
                item.dropdown
                  ? "footer_mobi_item_open"
                  : "footer_mobi_item_closed"
              }`}
            >
              <div className="footer_mobi_item_link">
                <Link to={item.item1.link}> {item.item1.name}</Link>
              </div>
              <div className="footer_mobi_item_link">
                <Link to={item.item2.link}> {item.item2.name}</Link>
              </div>
              <div className="footer_mobi_item_link">
                <Link to={item.item3.link}> {item.item3.name}</Link>
              </div>
              <div className="footer_mobi_item_link">
                <Link to={item.item4.link}> {item.item4.name}</Link>
              </div>
              <div className="footer_mobi_item_link">
                <Link to={item?.item5?.link}> {item?.item5?.name}</Link>
              </div>
              <div className="footer_mobi_item_link">
                <Link to={item?.item6?.link}>{item?.item6?.name}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Footer set only for mobile screen end*/}
      <hr />
      <div className="footer_copyright">
        <div className="footer_copyright_left">
          <p>Copyright © since 2018 Oak & Luna Custom Jewelry</p>
          <p>All rights reserved.</p>
        </div>
        <div className="footer_copyright_right">
          <img src="https://www.oakandluna.com/images/site/visa_i.png" alt="" />
          <img
            src="https://www.oakandluna.com/images/site/mastercard_i.png"
            alt=""
          />
          <img src="https://www.oakandluna.com/images/site/amex_i.png" alt="" />
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
          <img src="https://www.oakandluna.com/images/site/ssl_i.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
