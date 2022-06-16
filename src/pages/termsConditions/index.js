import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Container from "../../components/container";
import "./_termsConditions.scss";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";

const TermsConditions = () => {
  return (
    <Container className="termsConditions">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="termsConditionsTop_Cntr">
        <div className="termsConditionsTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="termsConditionsTop_Cntr_subtitle">
          TERMS & CONDITIONS
        </div>
      </div>
      <div className="termsConditions_container">
        <div className="termsConditions_container_header">
          By purchasing from{" "}
          <span className="termsConditions_container_header_link">
            Oak & Luna
          </span>
          , you agree to the following terms and conditions.
        </div>

        {/* Item-01 */}
        <div className="termsConditions_container_item">
          <div className="termsConditions_container_item_header">
            PRIVACY POLICY
          </div>
          <div className="termsConditions_container_item_lists">
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                At Oak & Luna, your privacy is extremely important. Any
                information you submit to our website, or that is gathered by a
                “cookie” during your visit, is used strictly by Oak & Luna to
                maintain a record of your purchases and for promotional reasons.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                We do not sell, transfer, rent or trade your information to any
                third party.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                All personal information submitted through our site is
                confidential. Under no circumstances will we disclose or share
                your information with an unauthorized third party.
              </div>
            </li>
          </div>
        </div>

        {/* Item-02 */}
        <div className="termsConditions_container_item">
          <div className="termsConditions_container_item_header">
            COOKIE POLICY
          </div>
          <div className="termsConditions_container_item_lists">
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Cookies are pieces of information stored directly on the
                computer or device that you are using. Oak & Luna uses cookies
                to give you a quick and seamless shopping experience.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                With cookies enabled, Oak & Luna can determine the buying and
                browsing behavior of all customers. By browsing Oak & Luna,
                customers consent to the placement of cookies on their computer.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Customers have the ability to disable cookies by adjusting user
                settings on their browser.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Click here to see full Cookie Policy.
              </div>
            </li>
          </div>
        </div>

        {/* Item-03 */}
        <div className="termsConditions_container_item">
          <div className="termsConditions_container_item_header">
            SHIPMENT, CUSTOMS, DUTIES AND TAXES
          </div>
          <div className="termsConditions_container_item_lists">
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                All items purchased from Oak & Luna are made pursuant to a
                shipment contract.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                This means the risk of loss and title for such items pass to the
                buyer upon our delivery to the carrier.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                The use of the Oak & Luna site is intended only to people and
                entities able to form legally binding agreements and with the
                purpose of purchasing items for personal use by themselves or as
                gifts.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Oak & Luna offers international shipping. The recipient
                specified on the delivery address will be the importer of the
                purchased product, and must comply with all laws and regulations
                of the destination country.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Purchased goods may be subject to import taxes, customs duties
                and fees levied by the destination country or state.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                The recipient specified on the delivery address may be subject
                to such import taxes, customs duties and fees, which are levied
                once a shipment reaches the recipient's location.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Additional charges for customs clearance must be borne by the
                recipient specified on the delivery address. Oak & Luna has no
                control over these charges and cannot predict what they may be.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                It is the responsibility of the recipient to contact their local
                customs office for more information. When customs clearance
                procedures are required, it can cause delays beyond Oak & Luna’s
                original delivery estimates.
              </div>
            </li>
          </div>
        </div>

        {/* Item-04 */}
        <div className="termsConditions_container_item">
          <div className="termsConditions_container_item_header">
            DISCLAIMER AND LIMITATION OF LIABILITY
          </div>
          <div className="termsConditions_container_item_lists">
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Oak & Luna portrays products as accurately as possible. However,
                Oak & Luna does not warrant that product descriptions, pictures
                or any other content of Oak & Luna is accurate, complete,
                reliable, current, or error-free. Variations caused by
                technical, typographical, digital, or photographic reasons may
                occur.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Colors may be incorrect due to your monitor settings. We cannot
                guarantee that your monitor’s display will be accurate.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                If you receive a product that did not have an accurate
                description, you may return the product new and unused for a
                refund. All of Oak & Luna products are guaranteed against
                defects for 30 days from the date of the invoice. Except as
                expressly stated herein, Oak & Luna disclaims all warranties,
                either express or implied, of any kind with respect to products
                sold on the Oak & Luna site.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                You agree that the sole and exclusive maximum liability to Oak &
                Luna arising from any product sold on the Oak & Luna site is the
                price of the product ordered.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                In no event shall Oak & Luna, its directors, officers, employees
                or representatives be liable for special, indirect,
                consequential, or punitive damages related to products sold.
              </div>
            </li>
          </div>
        </div>

        {/* Item-05 */}
        <div className="termsConditions_container_item">
          <div className="termsConditions_container_item_header">
            MARKETING USE OF YOUR PERSONAL INFORMATION
          </div>
          <div className="termsConditions_container_item_lists">
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                By signing up for newsletters, you agree to receive special
                offers and promotions of Oak & Luna. You can unsubscribe from
                emails at any time by clicking the unsubscribe link contained in
                the email.
              </div>
            </li>
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                We do not rent, sell, or share Personal Information about you
                with other people or non- affiliated companies for marketing
                purposes without your permission.
              </div>
            </li>
          </div>
        </div>

        {/* Item-06 */}
        <div className="termsConditions_container_item">
          <div className="termsConditions_container_item_header">
            CONTACTING OAK & LUNA
          </div>
          <div className="termsConditions_container_item_lists">
            <li className="termsConditions_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                If customers have any comments, questions, or concerns regarding
                the Policy or any other issues regarding privacy and security,
                please do not hesitate to contact Oak & Luna customer service
                representatives (custserv@OakandLuna.com).
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

export default TermsConditions;
