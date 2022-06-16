import React, { useState } from "react";
import "./_contactUs.scss";
import Container from "../../components/container/index";
import { Link } from "react-router-dom";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";

const data = [
  {
    header: "Managing my order",
    option1: "Change my shipping address",
    option2: "Change my inscription",
    option3: "Change my ring size",
    option4: "Change my chain size",
    option5: "Change my item or the material",
    option6: "Change the shipping method",
    option7: "Add a coupon to my order",
    option8: "Add an item to my order",
    option9: "Double item in my order / Double order",
    option10: "I want to cancel my order",
  },
  {
    header: "Check Order Status",
    option1: "I didn’t receive a confirmation email",
    option2: "When will my order arrive?",
    option3: "My order is late",
  },
  {
    header: "Inquire about received order",
    option1: "My jewelry is damaged",
    option2: "Item isn't as expected",
    option3: "My jewelry is too small/big",
    option4: "There is a mistake in my order / Something is missing",
    option5: "I lost part of my jewelry",
    option6: "Provide feedback",
  },
  {
    header: "Product & Shopping Information",
    option1: "Product information",
    option2: "I have a special request",
    option3: "The delivery options",
    option4: "Technical issues",
  },
  {
    header: "Question about payment",
    option1: "Payment options",
    option2: "My payment proof",
    option3: "I have check out issues",
    option4: "Promotion information",
    option5: "Double charge on my bank statement",
    option6: "Coupon Issues",
  },
  {
    header: "My Rewards & Login Info",
    option1: "Sign up/ Sign in issues",
    option2: "Earned points issues",
    option3: "Refer a friend issues",
  },
  {
    header: "Something else",
    option1: "Business / sales opportunity",
    option2: "Data Protection request",
    option3: "Unsubscribe me from newsletter",
    option4: "Legal concerns",
  },
];

const ContactUs = () => {
  const [dropDown, setDropdown] = useState(false);
  const [dropDownValue, setDropdownValue] = useState("Select a topic");
  return (
    <Container className="contactUs">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      {/* <div className="contactUsWrapper"> */}
      <div className="contactUs_header">EMAIL US</div>
      {/* <hr /> */}
      <div className="contactUs_subtitle">
        <div>
          Please send us your questions / comments in the form below, and we
          will contact you within 48 hours.
        </div>
        <li>
          You can also refer to our{" "}
          <Link className="contactUs_subtitle_link" to="/help">
            Help Center
          </Link>{" "}
          for quick answers for most questions.
        </li>
        <li>
          To follow up on your order, please visit the{" "}
          <Link className="contactUs_subtitle_link" to="/ordertracking">
            Order Tracking Information
          </Link>{" "}
          .
        </li>
      </div>
      <hr />
      <div className="contactUsWrapper">
        <div className="contactUs_field">
          <p className="contactUs_field_title">Topic *</p>
          <div
            onClick={() => {
              setDropdown(!dropDown);
            }}
            className="contactUs_dropdown_title"
          >
            {dropDownValue}
          </div>
          {dropDown && (
            <div className="contactUs_dropdown">
              {data.map((item, index) => (
                <div key={index}>
                  <div className="contactUs_dropdown_header">{item.header}</div>
                  {item.option1 && (
                    <div
                      onClick={() => {
                        setDropdownValue(item.option1);
                        setDropdown(!dropDown);
                      }}
                      className="contactUs_dropdown_item"
                    >
                      {item.option1}
                    </div>
                  )}
                  {item.option2 && (
                    <div
                      onClick={() => {
                        setDropdownValue(item.option2);
                        setDropdown(!dropDown);
                      }}
                      className="contactUs_dropdown_item"
                    >
                      {item.option2}
                    </div>
                  )}
                  {item.option3 && (
                    <div
                      onClick={() => {
                        setDropdownValue(item.option3);
                        setDropdown(!dropDown);
                      }}
                      className="contactUs_dropdown_item"
                    >
                      {item.option3}
                    </div>
                  )}
                  {item.option4 && (
                    <div
                      onClick={() => {
                        setDropdownValue(item.option4);
                        setDropdown(!dropDown);
                      }}
                      className="contactUs_dropdown_item"
                    >
                      {item.option4}
                    </div>
                  )}
                  {item.option5 && (
                    <div
                      onClick={() => {
                        setDropdownValue(item.option5);
                        setDropdown(!dropDown);
                      }}
                      className="contactUs_dropdown_item"
                    >
                      {item.option5}
                    </div>
                  )}
                  {item.option6 && (
                    <div
                      onClick={() => {
                        setDropdownValue(item.option6);
                        setDropdown(!dropDown);
                      }}
                      className="contactUs_dropdown_item"
                    >
                      {item.option6}
                    </div>
                  )}
                  {item.option7 && (
                    <div
                      onClick={() => {
                        setDropdownValue(item.option7);
                        setDropdown(!dropDown);
                      }}
                      className="contactUs_dropdown_item"
                    >
                      {item.option7}
                    </div>
                  )}
                  {item.option8 && (
                    <div
                      onClick={() => {
                        setDropdownValue(item.option8);
                        setDropdown(!dropDown);
                      }}
                      className="contactUs_dropdown_item"
                    >
                      {item.option8}
                    </div>
                  )}
                  {item.option9 && (
                    <div
                      onClick={() => {
                        setDropdownValue(item.option9);
                        setDropdown(!dropDown);
                      }}
                      className="contactUs_dropdown_item"
                    >
                      {item.option9}
                    </div>
                  )}
                  {item.option10 && (
                    <div
                      onClick={() => {
                        setDropdownValue(item.option10);
                        setDropdown(!dropDown);
                      }}
                      className="contactUs_dropdown_item"
                    >
                      {item.option10}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="contactUs_field">
          <p className="contactUs_field_title">First Name *</p>
          <input className="contactUs_field_input" type="text" />
        </div>
        <div className="contactUs_field">
          <p className="contactUs_field_title">Last Name *</p>
          <input className="contactUs_field_input" type="text" />
        </div>
        <div className="contactUs_field">
          <p className="contactUs_field_title">Email *</p>
          <input className="contactUs_field_input" type="text" />
        </div>
        <div className="contactUs_field">
          <p className="contactUs_field_title">Verify Email *</p>
          <input className="contactUs_field_input" type="text" />
        </div>
        <div className="contactUs_field">
          <p className="contactUs_field_title">Phone Number</p>
          <input className="contactUs_field_input" type="text" />
        </div>
        <div className="contactUs_field">
          <p className="contactUs_field_title">Order Number</p>
          <input className="contactUs_field_input" type="text" />
        </div>
        <div className="contactUs_field">
          <p className="contactUs_field_title">Product Link</p>
          <input className="contactUs_field_input" type="text" />
        </div>
        <div className="contactUs_field">
          <p className="contactUs_field_title">Additional notes *</p>
          <textarea className="contactUs_field_input" rows="7" col="20" />
        </div>
        <div className="contactUs_SubmitBtn">SUBMIT YOUR QUESTION</div>
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

export default ContactUs;
