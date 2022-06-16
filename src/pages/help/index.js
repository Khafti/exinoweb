import React from "react";
import { AiOutlineRight, AiOutlineCar } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { VscRefresh } from "react-icons/vsc";
import { GrDocumentExcel } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { GoMail } from "react-icons/go";
import Container from "../../components/container";
import { Link } from "react-router-dom";
import "./_help.scss";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";

const Help = () => {
  const data = [
    {
      icon: <BsInfoCircle className="help_item_before_icon" />,
      name: "Product & General Information",
      questions: [
        {
          ques: "How to take care of my jewelry?",
        },
        {
          ques: "What are my delivery options?",
        },
        {
          ques: "Is it possible to change the order of the engravings for the 3D Bar Necklace?",
        },
        {
          ques: "How to place an order at Oak & Luna?",
        },
      ],
    },
    {
      icon: <AiOutlineCar className="help_item_before_icon" />,
      name: "Delivery",
      questions: [
        {
          ques: "Why didn't I get an order confirmation?",
        },
        {
          ques: "Where is my order?",
        },
        {
          ques: "I can't find my order ID number",
        },
        {
          ques: "How do I track my order?",
        },
      ],
    },
    {
      icon: <VscRefresh className="help_item_before_icon" />,
      name: "Change Order Details",
      questions: [
        {
          ques: "How can I change my shipping address?",
        },
        {
          ques: "How can I change an order after placing it?",
        },
        {
          ques: "How do I change my inscription?",
        },
        {
          ques: "I forgot to use my coupon",
        },
      ],
    },
    {
      icon: <GrDocumentExcel className="help_item_before_icon" />,
      name: "Received Item Issues",
      questions: [
        {
          ques: "My jewelry is damaged, what should I do?",
        },
        {
          ques: "My chain broke, what should I do?",
        },
        {
          ques: "Returns & Cancellations",
        },
        {
          ques: "My chain size that I received is incorrect, what should I do?",
        },
      ],
    },
    {
      icon: <MdOutlinePayment className="help_item_before_icon" />,
      name: "Payment & Promo Information",
      questions: [
        {
          ques: "My promotional code doesn't work",
        },
        {
          ques: "Can I use more than one coupon code?",
        },
        {
          ques: "Why do I see a double charge on my billing statement?",
        },
        {
          ques: "I have a PayPal account but I cannot complete the payment",
        },
      ],
    },
  ];
  return (
    <Container className="help">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="blogTop_Cntr">
        <div className="blogTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="blogTop_Cntr_subtitle">HELP CENTER</div>
      </div>

      <div className="help_items">
        {data.map((item, index) => (
          <div key={index} className="help_hoverContainer">
            <div className="help_beforeHover">
              <div className="help_item_before">
                {item.icon}
                {/* <ImInfo className="help_item_before_icon" /> */}
                <div className="help_item_before_title">
                  {/* Product & General Information */}
                  {item.name}
                </div>
                <div className="help_item_before_ansBtn">Find Answers</div>
              </div>
            </div>
            <div className="help_afterHover">
              <div className="help_item_after">
                <div>
                  <div className="help_item_after_title">
                    {/* Product & General Information */}
                    {item.name}
                  </div>
                  {item.questions.map((ques, index) => (
                    <div key={index} className="help_item_after_ques">
                      {ques.ques}
                    </div>
                  ))}

                  <div className="help_item_after_ques">
                    What are my delivery options?
                  </div>
                  {/* <div className="help_item_after_ques">
                    Is it possible to change the order of the engravings for the
                    3D Bar Necklace?
                  </div>
                  <div className="help_item_after_ques">
                    How to place an order at Oak & Luna?
                  </div> */}
                </div>
                <div className="help_item_after_viewBtn">VIEW ALL</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="help_contactBtnWrap">
        <Link to="/contact-us">
          <div className="help_contactBtn">
            <GoMail style={{ marginRight: "8px" }} size={24} /> CONTACT US
          </div>
        </Link>
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

export default Help;
