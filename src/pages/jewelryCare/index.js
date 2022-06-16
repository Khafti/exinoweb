import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Container from "../../components/container";
import "./_jewelryCare.scss";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";

const JewelryCare = () => {
  return (
    <Container className="jewelryCare">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="jewelryCareTop_Cntr">
        <div className="jewelryCareTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="jewelryCareTop_Cntr_subtitle">JEWELRY CARE 101</div>
      </div>
      <div className="jewelryCare_container">
        <div className="jewelryCare_container_header">
          It's true what they say - once you get your Oak and Luna jewelry, you
          never want to take them off. But even so, everything gets better with
          some TLC. We've asked our jewelers to give us some of their top tips
          on keeping your pieces dazzling:
        </div>

        {/* Item-01 */}
        <div className="jewelryCare_container_item">
          <div className="jewelryCare_container_item_header">
            FOR ALL JEWELRY
          </div>
          <div className="jewelryCare_container_item_lists">
            <li className="jewelryCare_container_item_list">
              <div>
                Some products, lotions, and chemicals can damage your Oak & Luna
                jewelry, so make sure you leave it off when you:
              </div>
            </li>
            <li className="jewelryCare_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>
                Shower or do your hair & makeup
              </div>
            </li>
            <li className="jewelryCare_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>Deep clean your space</div>
            </li>
            <li className="jewelryCare_container_item_list">
              <div>●</div>
              <div style={{ marginLeft: "8px" }}>Swim or sit in a hot tub</div>
            </li>
          </div>
        </div>

        {/* Item-02 */}
        <div className="jewelryCare_container_item">
          <div className="jewelryCare_container_item_header">
            925 STERLING SILVER
          </div>
          <div className="jewelryCare_container_item_lists">
            <li className="jewelryCare_container_item_list">
              <div>
                If you feel your silver needs a refresh, rub it gently with a
                soft piece of cloth (like a microfiber glasses cleaning cloth).
                For extra oomph, try using silver polish to remove any
                tarnishing and dirt.
              </div>
            </li>
            <li className="jewelryCare_container_item_list">
              <div>
                Don't hesitate to wear your sterling silver pieces constantly -
                the oils in your skin will actually prevent the jewelry from
                tarnishing! But when you do take them off (to shower or sleep),
                it's best to store each piece individually in an airtight
                plastic bag to keep out moisture.
              </div>
            </li>
          </div>
        </div>

        {/* RECOMENDED FOR YOU */}
        {/* All CSS ARE FROM REVIEWS PAGE */}
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
        <hr style={{ margin: "4rem 0 2rem 0" }} />

        {/* Item-03 */}
        <div className="jewelryCare_container_item">
          <div className="jewelryCare_container_item_header">
            SOLID GOLD, GOLD-PLATING, AND GOLD VERMEIL
          </div>
          <div className="jewelryCare_container_item_lists">
            <li className="jewelryCare_container_item_list">
              <div>
                There's an easy way to return the shine to dull gold, rose-gold,
                and vermeil. Place your pieces in a bowl and soak them in a
                mixture of warm water and mild dish soap. Leave them there for a
                few minutes, then rinse with water and dry with a soft piece of
                cloth. Rubbing gently as you dry can help you get rid of
                stubborn residue or dirt.
              </div>
            </li>
            <li className="jewelryCare_container_item_list">
              <div>
                When you're not wearing your jewelry, store it individually in a
                soft pouch or bag.
              </div>
            </li>
          </div>
        </div>

        {/* Item-04 */}
        <div className="jewelryCare_container_item">
          <div className="jewelryCare_container_item_header">
            CUBIC ZIRCONIA
          </div>
          <div className="jewelryCare_container_item_lists">
            <li className="jewelryCare_container_item_list">
              <div>
                Keep the high shine of cubic zirconia alive by giving it a
                gentle polishing treatment. Dip a soft toothbrush in a mixture
                of warm water and mild soap. Gently scrub away any dirt and
                build-up. Once you're done, rinse well and dry with a soft piece
                of cloth.
              </div>
            </li>
          </div>
        </div>

        {/* Item-05 */}
        <div className="jewelryCare_container_item">
          <div className="jewelryCare_container_item_header">DIAMONDS</div>
          <div className="jewelryCare_container_item_lists">
            <li className="jewelryCare_container_item_list">
              <div>
                To keep your diamonds clear and beautiful, soak them for a few
                minutes in a mixture of warm water and mild soap to remove any
                grease and dirt build-up. You can do this once or twice a week,
                or whenever you notice they're looking a bit dull. If you need
                to, you can use a soft, clean toothbrush to remove any remaining
                dirt.
              </div>
            </li>
          </div>
        </div>

        {/* Item-06 */}
        <div className="jewelryCare_container_item">
          <div className="jewelryCare_container_item_header">
            {/* Header */}
          </div>
          <div className="jewelryCare_container_item_lists">
            <li className="jewelryCare_container_item_list">
              <div>
                Dry your jewelry with a soft piece of cloth, and store in an
                air-tight plastic bag (for silver) or a soft pouch (for gold).
              </div>
            </li>
          </div>
        </div>

        {/* Item-07 */}
        <div className="jewelryCare_container_item">
          <div className="jewelryCare_container_item_header">
            {/* Header */}
          </div>
          <div className="jewelryCare_container_item_lists">
            <li className="jewelryCare_container_item_list">
              <div>
                Got any more questions about jewelry care? We're always here to
                help.
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

export default JewelryCare;
