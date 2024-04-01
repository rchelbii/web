import { poppins } from "@/app/layout";
import { ExperimentCardProps } from "@/data/types";
import React from "react";

const ExperimentCard: React.FC<ExperimentCardProps> = (
  props: Readonly<ExperimentCardProps>
) => {
  return (
    <div className="group/item py-8 flex gap-8 items-start cursor-pointer md:w-1/2 w-full">
      <div className="group-hover/item:bg-black group-hover/item:text-white dark:group-hover/item:bg-white dark:group-hover/item:text-black ease-out duration-500 group-hover/item:scale-110 p-3 rounded-full">
        {props.icon}
      </div>
      <div className={`${poppins.variable} font-poppins`}>
        <h3 className="text-base md:text-xl mb-2 group-hover/item:underline underline-offset-1">
          {props.title}
        </h3>
        <p className="text-sm md:text-base">{props.content}</p>
      </div>
    </div>
  );
};

export default ExperimentCard;
