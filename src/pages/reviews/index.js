import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Container from "../../components/container";
import ConnectInput from "../../layout/home/connectInput";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import "./_revirews.scss";

const Reviews = () => {
  return (
    <Container className="reviews">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="reviewsTop_Cntr">
        <div className="reviewsTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="reviewsTop_Cntr_subtitle">COSTUMER REVIEWS</div>
      </div>
      <div className="reviews_trustpilot">
        See what our amazing customers are saying:
      </div>
      <div className="reviews_trustpilot_link">Trustpilot</div>
      <div className="reviews_recommended_header">Recommended for You</div>
      <div className="reviews_container">
        <div className="reviews_container_item">
          <img
            src="https://cdn.oakandluna.com/images/Products/m_big_110-01-1405-09.jpg"
            alt=""
            className="reviews_container_item_img"
          />
          <div className="reviews_container_item_txt">
            Mon Petit Name Necklace
          </div>
        </div>
        <div className="reviews_container_item">
          <img
            src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2190-09.jpg"
            alt=""
            className="reviews_container_item_img"
          />
          <div className="reviews_container_item_txt">
            Mon Petit Name Necklace
          </div>
        </div>
        <div className="reviews_container_item">
          <img
            src="https://cdn.oakandluna.com/images/Products/m_big_114-01-3219-35.jpg"
            alt=""
            className="reviews_container_item_img"
          />
          <div className="reviews_container_item_txt">
            Mon Petit Name Necklace
          </div>
        </div>
        <div className="reviews_container_item">
          <img
            src="https://cdn.oakandluna.com/images/Products/m_big_110-03-3216-09.jpg"
            alt=""
            className="reviews_container_item_img"
          />
          <div className="reviews_container_item_txt">
            Mon Petit Name Necklace
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

export default Reviews;
