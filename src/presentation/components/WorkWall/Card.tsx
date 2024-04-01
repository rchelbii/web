import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkWallCardProps } from "@/data/types";

const Card: React.FC<WorkWallCardProps> = (props: WorkWallCardProps) => {
  return (
    <Link href={props.link} target="_blank">
      <div className="w-11/12	 h-auto border-2 shrink-0 ease-in-out duration-500 hover:-translate-y-2 hover:scale-105 rounded-sm">
        <Image src={props.imageSource} alt="" priority />
      </div>
    </Link>
  );
};

export default Card;
