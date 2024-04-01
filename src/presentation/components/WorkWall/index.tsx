import React from "react";
import Card, { CardProps } from "./Card";
import reditoImage from "../../../../public/work/redito.png";

const data: CardProps[] = [
  {
    link: "https://github.com/rchelbii/redito",
    imageSource: reditoImage,
  },
];
const WorkWall = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 place-content-center place-items-center">
      {data.map((item, index) => (
        <Card {...item} />
      ))}
    </div>
  );
};

export default WorkWall;
