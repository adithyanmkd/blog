import React from "react";

interface propType {
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  category: string;
  date: string;
  heading: string;
  p: string;
}

const Card = ({ img, category, date, heading, p }: propType) => {
  return <div>{heading}</div>;
};

export default Card;
