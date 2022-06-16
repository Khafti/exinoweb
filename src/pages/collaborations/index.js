import React from "react";
import Container from "../../components/container";
import ConnectInput from "../../layout/home/connectInput";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import "./_collaborations.scss";

const FitGuide = () => {
  return (
    <Container className="collaborations">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="collaborations_header">COLLABORATIONS</div>

      {/* 1st Row */}
      <div className="collaborations_top">
        {/* Left Side */}
        <img
          className="collaborations_top_left"
          src="https://cdn.oakandluna.com/images/site/collab_main_gold_DT.jpg"
          alt="collaborations"
        />
        {/* Right Side */}
        <div className="collaborations_top_right">
          <div className="collaborations_top_right_header">
            COLLABORATE WITH US!
          </div>
          <p className="collaborations_top_right_p">
            At Oak & Luna studio each of our pieces has a unique personality
            that speaks to your own curated style.
          </p>
          <p className="collaborations_top_right_p">
            As a successful young online personalized jewelry brand our
            collections are the epitome of all gals' jewelry staples that take
            you effortlessly from dusk till dawn.
          </p>
        </div>
      </div>

      {/* For Mobile */}
      <div className="collaborations_topForMobile">
        <img
          src="https://cdn.oakandluna.com/images/site/collab_main_gold_MB.jpg"
          alt="images"
          className="collaborations_topForMobile_image"
        />
        <div className="collaborations_top_right">
          <div className="collaborations_top_right_header">
            PASSION FOR FASHION?
          </div>
          <p className="collaborations_top_right_p">
            Join the Oak & Luna Family if you are people smart, enjoy the thrill
            of game-changing are hungry for social media, and area creator of
            beautiful original content.
          </p>
          <p className="collaborations_top_right_p">
            If you are searching to maximize your talents and audience and
            elevate them to meet their full potential- we want to hear from you!
          </p>
        </div>
      </div>

      {/* Row-02 */}
      <div className="collaborations_middle">
        <div className="collaborations_middle_header">Exino & me</div>
        <div className="collaborations-banner collaborations-img1">
          <div className="collaborations_middle_contr">
            <div className="collaborations_middle_contr_header">
              PASSION FOR FASHION?
            </div>
            <p className="collaborations_middle_contr_p">
              Join the Oak & Luna Family if you are people smart, enjoy the
              thrill of game-changing are hungry for social media, and area
              creator of beautiful original content.
            </p>
            <p className="collaborations_middle_contr_p">
              If you are searching to maximize your talents and audience and
              elevate them to meet their full potential- we want to hear from
              you!
            </p>
          </div>
        </div>
      </div>

      {/* Row -03 */}
      <div className="collaborations_bottom">
        {/* Left */}
        <img
          className="collaborations_bottom_left"
          src="https://cdn.oakandluna.com/images/site/image_line_3.jpg"
          alt="imageCollaborations"
        />
        <div className="collaborations_bottom_right">
          <div className="collaborations_bottom_right_title">
            So, what are you waiting for?
          </div>
          <div className="collaborations_bottom_right_title">
            Join our affiliate program today!
          </div>
          <div className="collaborations_bottom_right_mail">
            COLLABORATIONS@OAKANDLUNA.COM
          </div>
          <button className="collaborations_bottom_right_btn">
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Row-04 */}
      <div className="collaborations_gallery">
        <div className="collaborations_gallery_header">
          OUR INSTAGRAM LADIES
        </div>
        <div className="collaborations_gallery_images">
          <img
            src="https://cdn.oakandluna.com/images/General/collab_bottom_4.jpg"
            className="collaborations_gallery_image"
            alt=""
          />
          <img
            src="https://cdn.oakandluna.com/images/General/collab_bottom_3.jpg"
            className="collaborations_gallery_image"
            alt=""
          />
          <img
            src="https://cdn.oakandluna.com/images/General/collab_bottom_2.jpg"
            className="collaborations_gallery_image"
            alt=""
          />
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

export default FitGuide;
