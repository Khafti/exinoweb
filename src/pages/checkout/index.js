import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCircleFill, BsCircle } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import Container from "../../components/container";
import "./_checkout.scss";

const Checkout = () => {
  const [sameBilling, setSameBilling] = useState(false);
  const [paypal, setPaypal] = useState(false);
  return (
    <Container className="checkout">
      <div className="checkout_top">
        <Link to="/" className="checkout_top_logo">
          Exino
        </Link>
        <Link to="/shipping-cart" className="checkout_top_back">
          <BiArrowBack style={{ marginRight: "8px" }} size={24} /> Back to
          Shopping Bag
        </Link>
      </div>
      <hr />

      {/* Enter Shipping Address */}
      <div className="checkout_main">
        {/* LEFT */}
        <div className="checkout_main_left">
          <div className="checkout_leftTop">
            <div className="checkout_leftTop_header">SHIPPING</div>
            <div className="checkout_leftTop_title">Enter Shipping Address</div>
            <div className="checkout_leftTop_feild">
              <div className="checkout_leftTop_feild_name">
                Recipient Full Name
              </div>
              <input className="checkout_leftTop_feild_input" />
            </div>
            <div className="checkout_leftTop_feild">
              <div className="checkout_leftTop_feild_name">Country</div>
              <input className="checkout_leftTop_feild_input" />
            </div>
            <div className="checkout_leftTop_feild">
              <div className="checkout_leftTop_feild_name">Street Address</div>
              <input className="checkout_leftTop_feild_input" />
            </div>
            <div className="checkout_leftTop_feild">
              <div className="checkout_leftTop_feild_name">
                Apt, Suite, Unit, Bulding
              </div>
              <input className="checkout_leftTop_feild_input" />
            </div>
            <div className="checkout_leftTop_feild">
              <div className="checkout_leftTop_feild_name">City</div>
              <input className="checkout_leftTop_feild_input" />
            </div>
            <div className="checkout_leftTop_feild">
              <div className="checkout_leftTop_feild_name">
                State (Optional)
              </div>
              <input className="checkout_leftTop_feild_input" />
            </div>
            <div className="checkout_leftTop_feild">
              <div className="checkout_leftTop_feild_name">Zip Code</div>
              <input className="checkout_leftTop_feild_input" />
            </div>
            <div className="checkout_leftTop_feild">
              <div className="checkout_leftTop_feild_name">Phone Number</div>
              <input className="checkout_leftTop_feild_input" />
            </div>
          </div>
          {/* BILLING */}
          <div className="checkout_billing">
            <div className="checkout_billing_header">BILLING</div>
            <div style={{ marginTop: "1rem" }}>
              <div
                onClick={() => {
                  setSameBilling(false);
                }}
                className="checkout_checkoutBox"
              >
                {!sameBilling ? (
                  <BsCircleFill className="checkout_checkoutBox_icon" />
                ) : (
                  <BsCircle className="checkout_checkoutBox_icon" />
                )}
                Same as shipping address
              </div>
              <div
                onClick={() => {
                  setSameBilling(true);
                }}
                className="checkout_checkoutBox"
              >
                {sameBilling ? (
                  <BsCircleFill className="checkout_checkoutBox_icon" />
                ) : (
                  <BsCircle className="checkout_checkoutBox_icon" />
                )}
                Use a different billing address
              </div>
            </div>
            {sameBilling && (
              <>
                <div className="checkout_billing_title">
                  Please fill in your billing information:
                </div>
                <div className="checkout_billing_feild">
                  <div className="checkout_billing_feild_name">Name</div>
                  <input className="checkout_billing_feild_input" />
                </div>
                <div className="checkout_billing_feild">
                  <div className="checkout_billing_feild_name">Country</div>
                  <input className="checkout_billing_feild_input" />
                </div>
                <div className="checkout_billing_feild">
                  <div className="checkout_billing_feild_name">
                    Billing Street Address
                  </div>
                  <input className="checkout_billing_feild_input" />
                </div>
                <div className="checkout_billing_feild">
                  <div className="checkout_billing_feild_name">
                    Apt, Suite, Unit, Building
                  </div>
                  <input className="checkout_billing_feild_input" />
                </div>
                <div className="checkout_billing_feild">
                  <div className="checkout_billing_feild_name">City</div>
                  <input className="checkout_billing_feild_input" />
                </div>
                <div className="checkout_billing_feild">
                  <div className="checkout_billing_feild_name">
                    State (Optional)
                  </div>
                  <input className="checkout_billing_feild_input" />
                </div>
                <div className="checkout_billing_feild">
                  <div className="checkout_billing_feild_name">Zip Code</div>
                  <input className="checkout_billing_feild_input" />
                </div>
              </>
            )}
          </div>
          {/* PAYMENT */}
          <div className="checkout_payment">
            <div className="checkout_payment_header">PAYMENT</div>
            <div className="checkout_payment_title">Payment Type:</div>
            <div style={{ marginTop: "1rem" }}>
              <div
                onClick={() => {
                  setPaypal(false);
                }}
                className="checkout_checkoutBox"
              >
                {!paypal ? (
                  <BsCircleFill className="checkout_checkoutBox_icon" />
                ) : (
                  <BsCircle className="checkout_checkoutBox_icon" />
                )}
                Credit Card
                <img
                  src="https://oakandluna.tenengroup.com/images/mobile/small/Visa36x20.png"
                  alt="card"
                  width={25}
                  height={15}
                  style={{ marginLeft: "8px" }}
                />
                <img
                  src="https://oakandluna.tenengroup.com/images/mobile/small/amex.png"
                  alt="card"
                  width={25}
                  height={15}
                  style={{ marginLeft: "4px" }}
                />
                <img
                  src="https://oakandluna.tenengroup.com/images/mobile/small/diners.png"
                  alt="card"
                  width={25}
                  height={15}
                  style={{ marginLeft: "4px" }}
                />
                <img
                  src="https://oakandluna.tenengroup.com/images/mobile/small/discover.png"
                  alt="card"
                  width={25}
                  height={15}
                  style={{ marginLeft: "4px" }}
                />
                <img
                  src="https://oakandluna.tenengroup.com/images/mobile/small/mastercard.png"
                  alt=""
                  width={25}
                  height={15}
                  style={{ marginLeft: "4px" }}
                />
              </div>
              {!paypal ? (
                <div className="creditCardBoxWrapper">
                  <div className="creditCardBox">
                    <div className="checkout_billing_feild">
                      <div className="checkout_billing_feild_name">
                        Credit Card Number
                      </div>
                      <input className="checkout_billing_feild_input" />
                    </div>
                    <div className="checkout_billing_feild">
                      <div className="checkout_billing_feild_name">
                        Security Code
                      </div>
                      <input className="checkout_billing_feild_input" />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div
                style={{ marginTop: "8px" }}
                onClick={() => {
                  setPaypal(true);
                }}
                className="checkout_checkoutBox"
              >
                {paypal ? (
                  <BsCircleFill className="checkout_checkoutBox_icon" />
                ) : (
                  <BsCircle className="checkout_checkoutBox_icon" />
                )}
                Paypal{" "}
                <img
                  style={{ marginLeft: "16px" }}
                  src="https://secure.tenengroup.com/Images/mobile/big/paypal.png"
                  alt="paypal"
                  width={60}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="checkout_Right checkout_main_right">
          <div className="">
            <div className="checkout_payment_header">ORDER SUMMARY</div>
            <div className="checkout_Right_row">
              <img
                src="https://cdn.oakandluna.com/images/Products/m_med_110-12-3426-09.jpg"
                alt="ProductImage"
                width={84}
                height={84}
                style={{ marginLeft: "4px" }}
              />
              <span className="checkout_Right_col">$ 120</span>
            </div>
            <hr />
            <div className="checkout_Right_row">
              <img
                src="https://cdn.oakandluna.com/images/Products/m_med_110-12-3426-09.jpg"
                alt="ProductImage"
                width={84}
                height={84}
                style={{ marginLeft: "4px" }}
              />
              <span className="checkout_Right_col">$ 120</span>
            </div>
            <hr />
            <div className="checkout_Right_row">
              <span className="checkout_Right_col">Subtotal:</span>
              <span className="checkout_Right_col">$ 300</span>
            </div>
            <hr />
            <div className="checkout_Right_row">
              <span className="checkout_Right_col">Shipping:</span>
              <span className="checkout_Right_col">$ 20</span>
            </div>
            <hr />
            <div className="checkout_Right_row">
              <span
                style={{ fontWeight: "bold" }}
                className="checkout_Right_col"
              >
                Order Total:
              </span>
              <span
                style={{ fontWeight: "bold" }}
                className="checkout_Right_col"
              >
                $ 320.00
              </span>
            </div>
          </div>
        </div>
      </div>

      {paypal ? (
        <div className="checkout_footer">
          <div className="checkout_footer_para">
            You will be redirected to PayPal secure website to complete your
            payment.
          </div>
          <button
            style={{ background: "#FFC439", color: "#003087" }}
            className="checkout_footer_btn"
          >
            PAYPAL
          </button>
          <div className="checkout_footer_para">
            Need some help? Contact us now and we'll be able to assist you!
          </div>
          <div className="checkout_footer_return">
            <Link to="/shipping-cart">Return to Shopping Cart</Link>
          </div>
        </div>
      ) : (
        <div className="checkout_footer">
          <div className="checkout_footer_para">
            The payment will be authorized online. This process will take
            approximately 30 seconds.
          </div>
          <button className="checkout_footer_btn">PLACE ORDER</button>
          <div className="checkout_footer_para">
            Need some help?{" "}
            <Link to="/contact-us" className="link-app">
              Contact us
            </Link>{" "}
            now and we'll be able to assist you!
          </div>
          <div className="checkout_footer_return">
            <Link to="/shipping-cart">Return to Shopping Cart</Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Checkout;
