import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Container from "../../components/container";
import "./_payment.scss";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";

const PaymentPolicy = () => {
  return (
    <Container className="paymentPolicy">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="paymentPolicyTop_Cntr">
        <div className="paymentPolicyTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="paymentPolicyTop_Cntr_subtitle">PAYMENT METHODS</div>
      </div>
      <div className="paymentPolicy_container">
        <div className="paymentPolicy_container_header">
          {/* UPDATED AS OF DECEMBER 10th, 2019 */}
        </div>
        {/* Item-01 */}
        <div className="paymentPolicy_container_item">
          <div className="paymentPolicy_container_item_header">
            {/* Header */}
          </div>
          <div className="paymentPolicy_container_item_lists">
            <li className="paymentPolicy_container_item_list">
              <div>
                At Oak & Luna, we accept all major credit cards,{" "}
                <span className="paymentPolicy_link">Apple Pay</span>
                and payments made through{" "}
                <span className="paymentPolicy_link">PayPal</span>. Full payment
                is required for your order to be processed.
              </div>
            </li>
          </div>
        </div>
        {/* Item-02 */}
        <div className="paymentPolicy_container_item">
          <div className="paymentPolicy_container_item_header">
            {/* Header */}
          </div>
          <div className="paymentPolicy_container_item_lists">
            <li className="paymentPolicy_container_item_list">
              <div>
                In cooperation with Klarna we offer you the following payment
                method: 4 interest-free installments. The service terms you can
                find here and here.
              </div>
            </li>
          </div>
        </div>
        {/* Item-03 */}
        <div className="paymentPolicy_container_item">
          <div className="paymentPolicy_container_item_header">
            {/* Header */}
          </div>
          <div className="paymentPolicy_container_item_lists">
            <li className="paymentPolicy_container_item_list">
              <div>
                In order to be able to offer you Klarna’s payment options, we
                will pass to Klarna certain aspects of your personal
                information, such as contact and order details, in order for
                Klarna to assess whether you qualify for their payment options
                and to tailor the payment options for you. Your personal data is
                handled in accordance with applicable data protection law and in
                accordance with the information in Klarna’s privacy policy.
              </div>
            </li>
          </div>
        </div>
        {/* Item-04 */}
        <div className="paymentPolicy_container_item">
          <div className="paymentPolicy_container_item_header">
            {/* Header */}
          </div>
          <div className="paymentPolicy_container_item_lists">
            <li className="paymentPolicy_container_item_list">
              <div className="footer_copyright_right">
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
            </li>
            <li className="paymentPolicy_container_item_list">
              <div>
                We also offer PayPal. Simply select "Checkout With PayPal" at
                checkout. You do not have to be a member with PayPal to use this
                option.
              </div>
            </li>
            <li className="paymentPolicy_container_item_list">
              <div>
                <img
                  src="https://cdn.oakandluna.com/images/General/PayPal_banner.png"
                  alt="paypal"
                />
              </div>
            </li>
          </div>
        </div>
        {/* Item-05 */}
        <div className="paymentPolicy_container_item">
          <div className="paymentPolicy_container_item_header">
            PAYPAL VERIFIED
          </div>
          <div className="paymentPolicy_container_item_lists">
            <li className="paymentPolicy_container_item_list">
              <div>
                Our payment system has 2048 bit encryption and secure servers so
                that you can have a secure shopping experience.
              </div>
            </li>
          </div>
        </div>
        {/* Item-06 */}
        <div className="paymentPolicy_container_item">
          <div className="paymentPolicy_container_item_header">
            {/* Heasder */}
          </div>
          <div className="paymentPolicy_container_item_lists">
            <li className="paymentPolicy_container_item_list">
              <div>
                Your credit card information is not processed through or stored
                on Oak & Luna servers, and no information is ever released to a
                third party.
              </div>
            </li>
          </div>
        </div>
        {/* Item-07 */}
        <div className="paymentPolicy_container_item">
          <div className="paymentPolicy_container_item_header">
            {/* Heasder */}
          </div>
          <div className="paymentPolicy_container_item_lists">
            <li className="paymentPolicy_container_item_list">
              <div>
                Oak & Luna reserves the right to make changes in our policies at
                any given time. Notification of such changes will be posted on
                this page. If you have any questions or comments about any of
                our policies, please contact us.
              </div>
            </li>
          </div>
        </div>

        {/* Item-08 */}
        <div className="paymentPolicy_container_item">
          <div className="paymentPolicy_container_item_header">
            {/* Heasder */}
          </div>
          <div className="paymentPolicy_container_item_lists">
            <li className="paymentPolicy_container_item_list">
              <div>All prices listed on site are in USD.</div>
            </li>
          </div>
        </div>
      </div>

      <hr style={{ margin: "50px 0" }} />
      <ConnectForever />
      <hr />
      <TrustPilot />
      <hr />
      <ConnectInput />
    </Container>
  );
};

export default PaymentPolicy;
