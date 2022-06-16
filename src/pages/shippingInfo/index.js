import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import Container from "../../components/container";
import "./_shippingInfo.scss";

const ShippingInfo = () => {
  const [option, setOption] = useState(false);
  const [optionUS, setOptionUS] = useState(false);
  const [optionCANADA, setOptionCANADA] = useState(false);
  const [optionUK, setOptionUK] = useState(false);
  const [optionAUSTRALIA, setOptionAUSTRALIA] = useState(false);
  const [optionWORLD, setOptionWORLD] = useState(false);
  const [notification, setNotification] = useState(false);
  const [tax, setTax] = useState(false);

  const shippingData = [
    {
      country: "US",
      freeShipping: "Get it Mon, May 23 - Tue, May 24",
      standardShipping: "Get it Sun, May 15 - Tue, May 17",
      urgentShipping: "Get it Mon, May 9 - Tue, May 10",
      dropDown: optionUS,
      setDropdown: setOptionUS,
    },
    {
      country: "Canada",
      freeShipping: "Get it Tue, May 31 - Fri, Jun 3",
      standardShipping: "Get it Sun, May 22 - Tue, May 24",
      urgentShipping: "Get it Wed, May 18 - Thu, May 19",
      dropDown: optionCANADA,
      setDropdown: setOptionCANADA,
    },
    {
      country: "UK",
      freeShipping: "Get it Mon, May 23 - Wed, May 2",
      standardShipping: "Get it Sat, May 21 - Mon, May 23",
      urgentShipping: "Get it Tue, May 17 - Thu, May 19",
      dropDown: optionUK,
      setDropdown: setOptionUK,
    },
    {
      country: "Australia",
      freeShipping: "Get it Thu, Jun 2 - Mon, Jun 6",
      standardShipping: "Get it Tue, May 24 - Thu, May 26",
      urgentShipping: "Get it Mon, May 23 - Wed, May 25",
      dropDown: optionAUSTRALIA,
      setDropdown: setOptionAUSTRALIA,
    },
    {
      country: "Rest of the World",
      freeShipping: "Get it Mon, May 23 - Tue, May 24",
      standardShipping: "Get it Mon, May 30 - Thu, Jun 2",
      urgentShipping: "Get it Fri, May 20 - Wed, May 25",
      dropDown: optionWORLD,
      setDropdown: setOptionWORLD,
    },
  ];

  return (
    <Container className="shippingInfo-main">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="shippingInfoTop_Cntr">
        <div className="shippingInfoTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="shippingInfoTop_Cntr_subtitle">
          SHIPPING INFORMATION
        </div>
      </div>

      <div className="shippingInfo">
        <div
          onClick={() => {
            setOption(!option);
          }}
          className="shippingInfo_btn"
        >
          <span>SHIPPING OPTIONS</span>
          <span>{!option ? <FaPlus size={20} /> : <FaMinus size={20} />} </span>
        </div>
        {option && (
          <>
            <div className="shippingInfo_dropdown">
              {shippingData.map((item, index) => (
                <div className="shippingInfo_dropdown_container">
                  <div
                    onClick={() => {
                      item.setDropdown(!item.dropDown);
                    }}
                    className="shippingInfo_dropdown_container_btn"
                  >
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      {item.country}
                    </span>
                    <span>
                      {!optionUS ? <FaPlus size={20} /> : <FaMinus size={20} />}
                    </span>
                  </div>

                  {item.dropDown && (
                    <div className="shippingInfo_underDropdown">
                      <div className="shippingInfo_underDropdown_row">
                        <div
                          style={{ fontWeight: "bold" }}
                          className="shippingInfo_underDropdown_row_left"
                        >
                          METHOD
                        </div>
                        <div
                          style={{ fontWeight: "bold" }}
                          className="shippingInfo_underDropdown_row_right"
                        >
                          ESTIMATED DELIVERY
                        </div>
                      </div>
                      <div className="shippingInfo_underDropdown_row">
                        <div className="shippingInfo_underDropdown_row_left">
                          Free Shipping
                        </div>
                        <div className="shippingInfo_underDropdown_row_right">
                          {item.freeShipping}
                        </div>
                      </div>
                      <div className="shippingInfo_underDropdown_row">
                        <div className="shippingInfo_underDropdown_row_left">
                          Standard Shipping
                        </div>
                        <div className="shippingInfo_underDropdown_row_right">
                          {item.standardShipping}
                        </div>
                      </div>
                      <div className="shippingInfo_underDropdown_row">
                        <div className="shippingInfo_underDropdown_row_left">
                          Urgent Shipping
                        </div>
                        <div className="shippingInfo_underDropdown_row_right">
                          {item.urgentShipping}
                        </div>
                      </div>
                      <div className="shippingInfo_underDropdown_bottom">
                        * Business days only, excluding weekends and public
                        holidays
                      </div>
                      <div className="shippingInfo_underDropdown_bottom">
                        * Prices include tax
                      </div>
                      <div className="shippingInfo_underDropdown_bottom">
                        * We deliver to P.O boxes & APOs through Standard or
                        Express shipping only
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <hr />
      </div>
      <div className="shippingInfo">
        <div
          onClick={() => {
            setNotification(!notification);
          }}
          className="shippingInfo_btn"
        >
          <span>SHIPPING NOTIFICATION & TRACKING</span>
          <span>
            {!notification ? <FaPlus size={20} /> : <FaMinus size={20} />}{" "}
          </span>
        </div>
        {notification && (
          <div className="shippingText">
            When your order ships, you will receive a Shipping Notification
            email. This email will provide you with your order ID to track your
            item as it makes its way to you, as well as the date your order was
            shipped. You can also check the status of your order online by
            logging into the track my order page with your Order ID and Email.
            *If your order has not arrived within the estimated shipping time,
            or you have additional questions regarding shipping, please contact
            our Customer Service Representatives
          </div>
        )}

        <hr />
      </div>
      <div className="shippingInfo">
        <div
          onClick={() => {
            setTax(!tax);
          }}
          className="shippingInfo_btn"
        >
          <span>DUTIES AND TAX</span>
          <span>{!tax ? <FaPlus size={20} /> : <FaMinus size={20} />} </span>
        </div>
        {tax && (
          <div className="shippingText">
            <div className="shippingText_header">1. US, AU, CA, Europe</div>
            <div>
              Prices include taxes and duties. There will be no additional
              charges upon delivery.
            </div>
            <div style={{ marginTop: "16px" }} className="shippingText_header">
              2. Other countries
            </div>
            <div>
              Local duties and taxes may be applied to your package. Oak and
              Luna has no control over these fees. Please refer to your
              country's customs and import office for more information.
            </div>
          </div>
        )}

        <hr />
      </div>
    </Container>
  );
};

export default ShippingInfo;
