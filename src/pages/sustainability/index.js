import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import SustainabilityContent from "../../layout/sustainabilityContent";
import Container from "../../components/container";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";
import "./_sustainability.scss";

const data = [
  {
    title: "A BETTER FUTURE FOR EVERYONE",
    para1:
      "Your trust in Oak and Luna is not something we take lightly. Know we understand the responsibility we have and we honor your choice by making sure this promise is real.",
    para2:
      "We work hard to do good for the planet and the people we meet. It’s a long journey, but we’re proud of what we achieved. We plan to keep improving, making Oak and Luna even more sustainable and conscious every year.",
    para3:
      "Keep reading to learn more about how Oak and Luna’s working to make this world a better, cleaner.",
    img: "https://cdn.oakandluna.com/images/site/oak-and-luna-brand-promise.jpg",
    imgLeft: false,
  },
  {
    title: "QUALITY MATERIALS SOURCED RESPONSIBLY",
    para1:
      "We’re involved in every part of the process to ensure it’s up to the highest standards – from materials and craftsmanship to packaging.",
    para2:
      "Our company headquarters is currently decreasing all single-use plastic, and dedicated recycling bins ensure that we create as little waste as possible.",
    para3:
      "The Oak and Luna production workshop uses materials that are locally sourced aiming to reduce our carbon footprint. The jewelry pieces are made in small batches to ensure high quality and minimized waste. Today, 80% of the silver, gold plating, and vermeil we use is recycled. That’s important, as using recycled silver cuts CO2 emissions by up to two thirds. By the end of 2024, we plan to be using 90% recycled silver, gold plating, and vermeil.",

    img: "https://cdn.oakandluna.com/images/site/oak-and-luna-ethical-supply-chain.jpg",
    imgLeft: true,
  },
  {
    title: "CONSCIOUS CRAFTSMANSHIP AND CRAFTSWOMANSHIP",
    para1:
      "The fine, high-quality pieces you love so much are available thanks to the hard work of our jewelry makers. With us from the very beginning, our workers play an essential part in the Oak and Luna family. Yes - fair working conditions are a must for every business. But the close relationships within our teams means it’s also a personal commitment for us. Here are some of our uncompromising standards:",
    para2: "● Employee well-being always comes first",
    para3: "● Employee rights must be kept",
    para4: "● Employees receive fair wages",
    para5: "● Work safety is strictly kept",
    para6: "● Work safety is strictly kept",
    para7:
      "● Weekly sporting events will be held to help everyone stay active and healthy",
    img: "https://cdn.oakandluna.com/images/site/oak-and-luna-ethical-production.jpg",
    imgLeft: false,
  },
  {
    title: "SO GREEN, SO FINE",
    para1:
      "Oak and Luna switched its packaging to 100% wood-free recyclable materials manufactured in pollution-free methods. This was part of an ongoing brand-wide effort to make Oak and Luna fully carbon-neutral. Even now, we’re constantly researching new ways to minimize our impact on the environment and go even greener.",
    img: "https://cdn.oakandluna.com/images/site/oak-and-luna-brand-ethical-packaging.jpg",
    imgLeft: true,
  },
  {
    title: "STYLISH ESSENTIALS, DELIVERED SUSTAINABLY",
    para1:
      "Shipping is one of the most carbon-expensive processes in e-commerce. That’s why sustainability is a core requirement for all delivery providers at Oak and Luna. Here are some of the innovative practices already implemented to manage our delivery footprint:",
    para2: "● Suppliers are committed to carbon neutrality",
    para3: "● Facilities are powered by renewable energy",
    para4:
      "● Couriers drive fully electric/hybrid commercial delivery vehicles",
    para5:
      "In addition, Oak and Luna advocates for new regulations to address climate change issues in the delivery industry.",
    img: "https://cdn.oakandluna.com/images/site/oak-and-luna-ethical-shipping.jpg",
    imgLeft: false,
  },
  {
    title: "THE ROAD AHEAD",
    para2:
      "We’re working non-stop to find and research new, creative methods that will support our community and environment. Our team members learn, educate others, and take action to ensure that we can make this world more beautiful than we found it.",
    para3:
      "We’ve set several key goals, including using 100% recycled packaging materials and 90% recycled silver by 2024, and operating as close to zero emissions as possible.",
    para4:
      "Keep following Oak and Luna to help us dream big and take part in our journey to make this world better for everyone.",
    img: "https://cdn.oakandluna.com/images/site/oak-and-luna-whats-next.jpg",
    imgLeft: true,
  },
];

const AboutUs = () => {
  return (
    <Container className="sustainability">
      {" "}
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="sustainabilityTop_Cntr">
        <div className="sustainabilityTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="sustainabilityTop_Cntr_subtitle">BLOG</div>
      </div>
      <div className="bannerSustainability">
        <div className="bannerSustainability_txt">
          <div>POSITIVE CHANGE AND BRAND RESPONSIBILITY AT OAK & LUNA</div>
          <span>July 15 2021</span>
          <p>
            We’re committed to creating the finest jewelry ethically. Read on to
            learn more about our efforts to minimize our impact and our vision
            for the future of Oak & Luna.
          </p>
        </div>
      </div>
      <div className="bannerSustainability-Mobi">
        <img
          className="bannerSustainability-Mobi_img"
          src="https://cdn.oakandluna.com/images/site/sustainability-dt.jpg"
          alt="sustainability"
        />
        <div className="bannerSustainability-Mobi_txt">
          <div>POSITIVE CHANGE AND BRAND RESPONSIBILITY AT OAK & LUNA</div>
          <span>July 15 2021</span>
          <p>
            We’re committed to creating the finest jewelry ethically. Read on to
            learn more about our efforts to minimize our impact and our vision
            for the future of Oak & Luna.
          </p>
        </div>
      </div>
      {data.map((item, index) => (
        <SustainabilityContent
          key={index}
          title={item.title}
          para1={item?.para1}
          para2={item?.para2}
          para3={item?.para3}
          para4={item?.para4}
          para5={item?.para5}
          para6={item?.para6}
          para7={item?.para7}
          img={item.img}
          imgLeft={item.imgLeft}
        />
      ))}
      <div className="sustainability_gallery">
        <div className="sustainability_gallery_contr">
          <img
            className="sustainability_gallery_contr_image"
            src="https://cdn.oakandluna.com/images/site/tango-triple-hoop-earrings_dt5.jpg"
            alt="sustainability"
          />
          <div className="sustainability_gallery_contr_title">
            TANGO TRIPLE HOOP EARRINGS
          </div>
        </div>
        <div className="sustainability_gallery_contr">
          <img
            className="sustainability_gallery_contr_image"
            src="https://cdn.oakandluna.com/images/site/throwback-name-ring-gold-plating_dt6.jpg"
            alt="sustainability"
          />
          <div className="sustainability_gallery_contr_title">
            THROWBACK NAME RING
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

export default AboutUs;
