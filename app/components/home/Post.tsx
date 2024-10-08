import React from "react";
import HeadingAndBtn from "../subComponents/HeadingAndBtn";
import Card from "../subComponents/Card";

const cardValues = [
  {
    img: {
      src: "/images/recentPost/img-1.png",
      width: 287,
      height: 258,
      alt: "card image",
    },
    category: "Travel",
    date: "13 March 2023",
    heading: "8 Rules of Travelling In Sea You Need To Know",
    p: "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
  },
];

const Post = () => {
  return (
    <div>
      <HeadingAndBtn heading={"Our Recent Post"} />
      {cardValues.map((value, index) => (
        <Card key={index} {...value} />
      ))}
    </div>
  );
};

export default Post;

// img={value.img} category={value.category} date={value.date} heading={value.heading} p={value.p}s
