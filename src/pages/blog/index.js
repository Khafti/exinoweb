import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import BlogContent from "../../layout/blogContent";
import Container from "../../components/container";
import "./_blog.scss";
import { Link } from "react-router-dom";
import ConnectForever from "../../layout/home/contForever";
import TrustPilot from "../../layout/home/trustPilot";
import ConnectInput from "../../layout/home/connectInput";

const data = [
  {
    title: "AMP YOUR GIFT GAME WITH CUSTOM NAME RINGS IN GOLD",
    date: "2022-03-17",
    para: "Oak and Luna custom name rings are the perfect way to make an impression. Whether you want to treat someone special or just find something that truly represents who you are, there's no better way than a custom ring. And thanks to our free resizing policy, you can shop knowing you'll be enjoying these for a long, long time. Here are some of our absolute faves - let us know what are yours.",
    img: "https://cdn.oakandluna.com/images/site/name-ring-in-gold-plated.jpg",
  },
  {
    title:
      "CELEBRATING INTERNATIONAL WOMEN’S DAY: A TIME TO BREAK THE BIAS AND CHAMPION WOMANHOOD",
    date: "2022-03-03",
    para: "To celebrate the day of womanhood and togetherness, we asked our amazing Oak & Luna team about their visions and aspirations for the future and how they hope to break the bias in their personal world.",
    img: "https://cdn.oakandluna.com/images/site/oak-and-luna-team.jpg",
  },
  {
    title: "BACK TO THE CLASSICS: THE CULTURED PEARL NECKLACE COLLECTION",
    date: "2022-03-02",
    para: "Our cultured pearl necklace collection is in, and it's better than we've ever dreamt. Imagine beautiful, classic jewelry that never goes out of style and easily pairs with everything else you have. Yes, please!",
    img: "https://cdn.oakandluna.com/images/site/pearl-necklaces.jpg",
  },
  {
    title: "WRITE YOUR HARMONY: THE STORY BEHIND OUR MUSIC NOTE NECKLACE",
    date: "2022-01-03",
    para: "When we created the Harmony collection, we wanted to make something with a universal appeal, not just for musicians but also for music lovers of all ages. Without a doubt, this is one of the most unique pieces we've ever created. Read to learn more about this incredible musical jewelry design.",
    img: "https://cdn.oakandluna.com/images/site/music-note-charms-for-necklace.jpg",
  },
  {
    title: "FOUR NECKLACES TO SPICE UP YOUR HOLIDAY",
    date: "2021-12-12",
    para: "It's the time of year where everyone is looking for the perfect outfit and the perfect gift. Trust us: You can't go wrong with our four must-have necklaces.",
    img: "https://cdn.oakandluna.com/images/site/initial-necklace-in-silver.jpg",
  },
  {
    title: "TREND ALERT: PAPERCLIP JEWELRY",
    date: "2021-11-25",
    para: "Paperclip chains are definitely having a moment - and we're loving it. They're fun and easy to style, and the paperclip necklace trend is simple enough to be worn every day and by everyone - making them a great addition to your jewelry collection. So get ready to add that must-have piece to your collection and shop paperclip necklaces and bracelets today!",
    img: "https://cdn.oakandluna.com/images/site/ivy_name_paperclip_chain_necklace.jpg",
  },
  {
    title: "OAK & LUNA GOES PINK: BREAST CANCER AWARENESS MONTH",
    date: "2021-10-27",
    para: "During the month of October, we're proud to partner with National Breast Cancer Foundation, Inc. (NBCF) to raise awareness and help women diagnosed with breast cancer. Read on to learn more about it.",
    img: "https://cdn.oakandluna.com/images/site/1_dt_pink_october.jpg",
  },
  {
    title: "DISCOVER YOURSELF WITH INEZ: OUR PERSONAL INITIAL JEWELRY SERIES",
    date: "2021-10-27",
    para: "Meet Inez, the perfect custom initial jewelry series. This delicate and meaningful piece is made from the finest materials and meant to feel like a part of you. Read on to learn about the journey that led to this beautiful series.",
    img: "https://cdn.oakandluna.com/images/site/inez-initial-necklace.jpg",
  },
];

const Blog = () => {
  return (
    <Container className="blog">
      {" "}
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "164px" }} />
      <div className="blogTop_Cntr">
        <div className="blogTop_Cntr_title">
          <Link to="/">Home</Link>{" "}
          <AiOutlineRight style={{ marginLeft: "8px" }} size={18} />{" "}
        </div>
        <div className="blogTop_Cntr_subtitle">Exino Blog </div>
      </div>
      {data.map((item, index) => (
        <BlogContent
          key={index}
          title={item.title}
          date={item.date}
          para={item.para}
          img={item.img}
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

export default Blog;
