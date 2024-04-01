import React from "react";
import workImage from "../../../assets/redito.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type CardProps = {
  link: string;
  imageSource: StaticImageData;
};

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <Link href={props.link} target="_blank">
      <div className="w-11/12	 h-auto border-2 shrink-0 ease-in-out duration-500 hover:-translate-y-2 hover:scale-105 rounded-sm">
        <Image src={props.imageSource} alt="" priority />
      </div>
    </Link>
  );
};

export default Card;
