import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import AboutUsContent from "../../layout/aboutUsContent";
import Container from "../../components/container";
import "./_aboutUs.scss";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";

const data = [
  {
    title: "BEAUTY, POWER, AND STRENGTH",
    para: "Oak and Luna was brought to life in 2018 to celebrate women. Created by a community of women who appreciate the finer things in life, it quickly became much more than a jewelry brand. Today, we empower our customers to embrace their unique side with affordable, high-quality jewelry inspired by beauty, power, and strength.",
    img: "https://cdn.oakandluna.com/images/site/ABOUT_US_2021_DT_1.jpg",
    imgLeft: false,
  },
  {
    title: "SELF-EXPRESSION",
    para: "Our designers are always experimenting with the classics, adding their own twist and perspective. The collection is constantly updated with new drops, giving everyone a chance to find the pieces that speak to them. And to really take things to a whole new level, almost every piece can be personalized. Our customers enjoy complete freedom of expression, telling their story in jewelry. This way, they can always have their most important people, moments, and expressions with them.",
    img: "https://cdn.oakandluna.com/images/site/ABOUT_US_2021_DT_2.jpg",
    imgLeft: true,
  },
  {
    title: "PREMIUM QUALITY",
    para: "You deserve nothing less than perfection. And so, strict quality standards are maintained throughout the entire process. From sourcing the materials to casting and setting every last stone, we make sure that our jewelry is made to last. Our commitment to perfection doesn't stop there. Every piece is also inspected by hand before it leaves our facility. Our team's close attention to detail ensures the jewelry you receive will stay sparkling and beautiful for years to come.",
    img: "https://cdn.oakandluna.com/images/site/ABOUT_US_2021_DT_3.jpg",
    imgLeft: false,
  },
  {
    title: "ETHICAL DESIGN",
    para: "Oak and Luna pieces are thoughtfully designed and handmade for you. Their journey starts with premium materials: the ethically sourced gold, silver, and gems used to create our collections. The quality diamonds you see in each piece are carefully and ethically obtained, and all other precious and semi-precious gemstones are genuine mineral stones. But that's not all. The fine, high-quality pieces you love so much are available thanks to people's hard work. That's why our suppliers are carefully vetted - to ensure they adhere to our code of conduct and fair labor practices, provide a safe working environment, and manage their environmental and social impact.",
    img: "https://cdn.oakandluna.com/images/site/ABOUT_US_2021_DT_4.jpg",
    imgLeft: true,
  },
  {
    title: "",
    para: "",
    img: "https://cdn.oakandluna.com/images/site/TC_OAL_MB.png",
    imgLeft: true,
  },
];

const AboutUs = () => {
  return (
    <Container className="aboutUs">
      {" "}
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="aboutUsTop_Cntr">
        <div className="aboutUsTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="aboutUsTop_Cntr_subtitle">ABOUT US </div>
      </div>
      {data.map((item, index) => (
        <AboutUsContent
          key={index}
          title={item.title}
          para={item.para}
          img={item.img}
          imgLeft={item.imgLeft}
        />
      ))}
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
