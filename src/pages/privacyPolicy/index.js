import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Container from "../../components/container";
import "./_privacyPolicy.scss";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";

const PrivacyPolicy = () => {
  return (
    <Container className="privacyPolicy">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="privacyPolicyTop_Cntr">
        <div className="privacyPolicyTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="privacyPolicyTop_Cntr_subtitle">PRIVACY POLICY</div>
      </div>
      <div className="privacyPolicy_container">
        <div className="privacyPolicy_container_header">
          UPDATED AS OF DECEMBER 10th, 2019
        </div>

        {/* Item-01 */}
        <div className="privacyPolicy_container_item">
          <div className="privacyPolicy_container_item_header">
            PRIVACY POLICY
          </div>
          <div className="privacyPolicy_container_item_lists">
            <li className="privacyPolicy_container_item_list">
              <div>
                We take your privacy with earnest intent. Accordingly, we take
                steps to ensure your privacy is always protected. We believe it
                is important to let you know what information is collected by
                the website “Oak & Luna” (the “website”), for what reasons we
                collect the information, and how we use it. This privacy policy
                forms a part of our terms of use, and is incorporated thereto by
                reference. Capitalised words not otherwise defined herein shall
                have the meaning given to such terms in the terms of use. The
                website does collect personal data, which enables us to provide
                you with the uttermost personalised shopping experience. This
                also allows us to contact you regarding your purchases and/or
                for marketing purposes. It is crucial to highlight that we do
                not sell your personal data, or any other data collected to
                anyone.
              </div>
            </li>
          </div>
        </div>

        {/* Item-02 */}
        <div className="privacyPolicy_container_item">
          <div className="privacyPolicy_container_item_header">
            HOW DO WE COLLECT INFORMATION?
          </div>
          <div className="privacyPolicy_container_item_lists">
            <li className="privacyPolicy_container_item_list">
              <div>
                We collect information about you when you engage in the
                following ways:
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                When you place an order or contact us.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                When you subscribe to our newsletters and other marketing
                platforms.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                When you register on our site you will be asked to submit some
                personal information, such as your name and contact information.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                When you ask for information, provide a review or feedback, or
                comment on articles published on the website.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>
                When you register your personal information with the website,
                you consent to the use of your personal data according to this
                privacy policy and those consents which you approve during the
                registration process and/or by your continued use of the
                website.
              </div>
            </li>
          </div>
        </div>

        {/* Item-03 */}
        <div className="privacyPolicy_container_item">
          <div className="privacyPolicy_container_item_header">
            NON-PERSONAL DATE WE COLLECT
          </div>
          <div className="privacyPolicy_container_item_lists">
            <li className="privacyPolicy_container_item_list">
              <div>
                Subject to your consent to the terms of this privacy policy, we
                will collect the internet browser you use, your number of visits
                to the website, your average time spent on website, pages
                viewed, etc. We use this information to improve usability and to
                improve content and functionality.
              </div>
            </li>
          </div>
        </div>

        {/* Item-04 */}
        <div className="privacyPolicy_container_item">
          <div className="privacyPolicy_container_item_header">
            WHAT TYPES OF PERSONAL DATA DO WE COLLECT?
          </div>
          <div className="privacyPolicy_container_item_lists">
            <li className="privacyPolicy_container_item_list">
              <div>
                The personal data we collect includes contact information such
                as date of birth, product preferences and payment information,
                email address and home address, and in addition, we may collect
                certain personal data from external sources (referred to as
                "personal data"). We do not store any payment information past
                the point of purchase. Your email address may be used for
                marketing and offers we think are most relevant for you, unless
                you chose otherwise. We do only collect the information stated
                which is classified as ‘identifiers’ by the CCPA.
              </div>
            </li>
          </div>
        </div>

        {/* Item-05 */}
        <div className="privacyPolicy_container_item">
          <div className="privacyPolicy_container_item_header">
            HOW WE USE YOUR PERSONAL DATA?
          </div>
          <div className="privacyPolicy_container_item_lists">
            <li className="privacyPolicy_container_item_list">
              <div>
                Personal data allows us to provide you with the following:
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Personalised shopping experience which targets information,
                services, content, and offers that are relevant to you and your
                online shopping habits and needs
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                To alert you of any administrational, product, or service
                changes.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                For social media, promotions, or marketing events, etc.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                To improve usability, content, and functionality.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>
                We will retain your information only to the extent to if said
                information is necessary for our legitimate interests; such as
                marketing purposes, fraud prevention. and record keeping. We do
                not sell your personal data, or any other data collected to
                anyone. We will retain the data securely, unless you ask us to
                remove it through the following link, select ‘Something Else’
                then "Data Protection " under ‘topic’.
              </div>
            </li>
          </div>
        </div>

        {/* Item-06 */}
        <div className="privacyPolicy_container_item">
          <div className="privacyPolicy_container_item_header">YOUR RIGHTS</div>
          <div className="privacyPolicy_container_item_lists">
            <li className="privacyPolicy_container_item_list">
              <div>You may contact us at any time, and request:</div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                To access any personal data relating to you in which we hold.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                To access your data without any personal charge.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                To know whether we share or sell your personal data.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                That we do not sell your personal data.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                That we delete your personal data.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                To exercise these rights without it affecting the services and
                prices we offer.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>
                Your email should include adequate details of your request and
                you may be further requested to provide additional details in
                order to authenticate your identity for us to thereby
                accommodate your requests. Please note that these rights are not
                definite and requests are subject to any applicable legal
                requirements.
              </div>
            </li>
          </div>
        </div>

        {/* Item-07 */}
        <div className="privacyPolicy_container_item">
          <div className="privacyPolicy_container_item_header">
            INTERACTION WITH THIRD PARTY PRODUCTS
          </div>
          <div className="privacyPolicy_container_item_lists">
            <li className="privacyPolicy_container_item_list">
              <div>
                This privacy policy does not apply to the practices of companies
                that we do not own or control, or third party services you
                interact with. We are not responsible for the privacy practices
                or the content of these third party services. Accordingly, we
                encourage you to review the conditions of each Third Party
                Service that you choose to use or interact with.
              </div>
            </li>
          </div>
        </div>

        {/* Item-08 */}
        <div className="privacyPolicy_container_item">
          <div className="privacyPolicy_container_item_header">SECURITY</div>
          <div className="privacyPolicy_container_item_lists">
            <li className="privacyPolicy_container_item_list">
              <div>
                The security of your Personal Data is important to us. All data
                transferred on our site is encrypted with TLS and complies with
                strict security standards. Payment information is transferred in
                a secure manner to our payment providers. However, no method of
                transmission over the Internet, or method of electronic storage,
                is 100% secure. Therefore, we cannot guarantee the
                confidentiality of your personal data. If you have any questions
                or security concerns, please contact us.
              </div>
            </li>
          </div>
        </div>

        {/* Item-09 */}
        <div className="privacyPolicy_container_item">
          <div className="privacyPolicy_container_item_header">
            CHILDREN PRIVACY
          </div>
          <div className="privacyPolicy_container_item_lists">
            <li className="privacyPolicy_container_item_list">
              <div>
                Our services are not intended for children under the minimum age
                for providing consent in the jurisdiction they reside in (such
                as 16 in certain countries in the EU; “Legal Age”), and we do
                not knowingly obtain personal information from children under
                the Legal Age without parental consent. If we learn that we have
                collected such information, we will delete it as quickly as
                possible. If you are aware of any personal information in our
                possession which may relate to children under the Legal Age,
                please contact us.
              </div>
            </li>
          </div>
        </div>

        {/* Item-10 */}
        <div className="privacyPolicy_container_item">
          <div className="privacyPolicy_container_item_header">COOKIES</div>
          <div className="privacyPolicy_container_item_lists">
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                The website places small packets of data, known as cookies, onto
                users’ computers and mobile devices. This is standard practice
                that all online businesses apply. Cookies are an integral part
                of assisting the website in providing a high quality online
                shopping experience to all users.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                With cookies enabled, we can determine the buying and browsing
                behavior of all users, and we can personalize content and ads,
                to provide social media features and analyze our traffic.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Users are able to disable cookies from their browser, if they
                wish too. However, take into account that with disabling cookies
                we may be unable to provide you with some of the services
                offered by the website.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                For more information about cookies, read our full Cookie Policy.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                We also share information about your use of our website with our
                social media, advertising and analytics partners, who may
                combine it with other information you provided to them or that
                they have collected from your use of their services.
              </div>
            </li>
            <li className="privacyPolicy_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Your use of the website shall mean that you consent to our
                Cookie Policy.
              </div>
            </li>
          </div>
        </div>

        {/* Item-11 */}
        <div className="privacyPolicy_container_item">
          <div className="privacyPolicy_container_item_header">
            UPDATES TO OUR PRIVACY POLICY
          </div>
          <div className="privacyPolicy_container_item_lists">
            <li className="privacyPolicy_container_item_list">
              <div>
                We reserve the right to modify this Privacy Policy at any time.
                Please occasionally check our privacy policy to review current
                policy.
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

export default PrivacyPolicy;
