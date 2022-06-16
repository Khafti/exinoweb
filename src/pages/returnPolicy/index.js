import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Container from "../../components/container";
import "./_returnPolicy.scss";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";

const ReturnPolicy = () => {
  return (
    <Container className="returnPolicy">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="returnPolicyTop_Cntr">
        <div className="returnPolicyTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="returnPolicyTop_Cntr_subtitle">RETURN POLICY</div>
      </div>
      <div className="returnPolicy_container">
        <div className="returnPolicy_container_header">
          {/* UPDATED AS OF DECEMBER 10th, 2019 */}
        </div>

        {/* Item-01 */}
        <div className="returnPolicy_container_item">
          <div className="returnPolicy_container_item_header">RETURNS</div>
          <div className="returnPolicy_container_item_lists">
            <li className="returnPolicy_container_item_list">
              <div>
                Oak & Luna offers FREE exchange or return on new, unworn items
                within 60 days of delivery. Please reach out to our{" "}
                <span className="returnPolicy_link">customer service</span> if
                you wish to return an order. Personalized jewelry pieces are
                made especially for you; therefore, they can be exchanged or
                returned for a 70% refund.
              </div>
            </li>
          </div>
        </div>

        {/* Item-02 */}
        <div className="returnPolicy_container_item">
          <div className="returnPolicy_container_item_header">
            CANCELLATIONS
          </div>
          <div className="returnPolicy_container_item_lists">
            <li className="returnPolicy_container_item_list">
              <div>
                Orders can be cancelled by reaching out to our{" "}
                <span className="returnPolicy_link">Customer Service Team</span>
                . If your order has already been shipped, you will need to
                return the items to us to exchange them or get a refund. Since
                we start working on orders immediately, a 30% restocking fee is
                deducted from the total refund amount for personalized pieces.
                Cancellations are processed on the same business day, but
                refunds may take up to 6 weeks to show up in your account or
                payment method.
              </div>
            </li>
          </div>
        </div>

        {/* Item-03 */}
        <div className="returnPolicy_container_item">
          <div className="returnPolicy_container_item_header">
            OTHER CONCERNS
          </div>
          <div className="returnPolicy_container_item_lists">
            <li className="returnPolicy_container_item_list">
              <div>
                We take great care to ensure you get beautiful, flawless pieces.
                If you feel your jewelry was damaged or have any other concerns,
                please get in touch so we can help. Oak & Luna reserves the
                right to make any amendments to this policy at any time.
                Notification of any changes will be posted on this page. Please{" "}
                <span className="returnPolicy_link">get in touch</span> if you
                have any questions.
              </div>
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

export default ReturnPolicy;
