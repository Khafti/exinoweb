import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Container from "../../components/container";
import "./_warrenty.scss";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";

const Warrenty = () => {
  return (
    <Container className="warrantyPolicy">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="warrantyPolicyTop_Cntr">
        <div className="warrantyPolicyTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="warrantyPolicyTop_Cntr_subtitle">WARRANTY</div>
      </div>
      <div className="warrantyPolicy_container">
        <div className="warrantyPolicy_container_header">
          {/* UPDATED AS OF DECEMBER 10th, 2019 */}
        </div>

        {/* Item-01 */}
        <div className="warrantyPolicy_container_item">
          <div className="warrantyPolicy_container_item_header">
            {/* Header */}
          </div>
          <div className="warrantyPolicy_container_item_lists">
            <li className="warrantyPolicy_container_item_list">
              <div>
                We want your Oak and Luna jewelry to fill your life with
                elegance and beauty. That's why we make sure each piece is made
                from the finest materials and gems.
              </div>
            </li>
            <li className="warrantyPolicy_container_item_list">
              <div>
                In the unlikely case of any damage, know the jewelry you buy is
                covered by a 24-month warranty. That means we’ll replace or fix
                any damaged item (or part) within 2 years of purchase.
              </div>
            </li>
          </div>
        </div>

        {/* Item-02 */}
        <div className="warrantyPolicy_container_item">
          <div className="warrantyPolicy_container_item_header">
            {/* Header */}
          </div>
          <div className="warrantyPolicy_container_item_lists">
            <li className="warrantyPolicy_container_item_list">
              <div>
                1. Damage (accidental or otherwise) that wasn't caused by faulty
                materials or production.
              </div>
            </li>
            <li className="warrantyPolicy_container_item_list">
              <div>
                2. Damage due to reasonable wear and tear, scratches, and broken
                findings (such as clasps or eyelets).
              </div>
            </li>
            <li className="warrantyPolicy_container_item_list">
              <div>
                3. Water damage to a product not specifically marked as
                water-resistant.
              </div>
            </li>
            <li className="warrantyPolicy_container_item_list">
              <div>4. Lost or stolen items.</div>
            </li>
          </div>
        </div>

        {/* Item-03 */}
        <div className="warrantyPolicy_container_item">
          <div className="warrantyPolicy_container_item_header">
            {/* Header */}
          </div>
          <div className="warrantyPolicy_container_item_lists">
            <li className="warrantyPolicy_container_item_list">
              <div>
                If you notice any damage covered by this warranty, please
                contact our{" "}
                <span className="warrantyPolicy_link">Customer Care Team</span>{" "}
                for help. Make sure you include your order number and a clear
                image of the damaged item, so we can process your request as
                soon as possible.
              </div>
            </li>
          </div>
        </div>

        {/* Item-04 */}
        <div className="warrantyPolicy_container_item">
          <div className="warrantyPolicy_container_item_header">
            {/* Header */}
          </div>
          <div className="warrantyPolicy_container_item_lists">
            <li className="warrantyPolicy_container_item_list">
              <div>
                It's important to note you will need to return the item to us
                before we can send you a new one.
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

export default Warrenty;
