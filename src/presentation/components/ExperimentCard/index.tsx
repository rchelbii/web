import { poppins } from "@/app/layout";
import React from "react";
import { FaRocket } from "react-icons/fa";

type ExperimentCardProps = {
  children: React.ReactNode;
};

const ExperimentCard: React.FC<ExperimentCardProps> = ({
  children,
}: Readonly<ExperimentCardProps>) => {
  return (
    <div className="group/item py-8 flex gap-8 items-start cursor-pointer md:w-1/2 w-full">
      <div className="group-hover/item:bg-black group-hover/item:text-white dark:group-hover/item:bg-white dark:group-hover/item:text-black ease-out duration-500 group-hover/item:scale-110 p-3 rounded-full">
        {children}
      </div>
      <div className={`${poppins.variable} font-poppins`}>
        <h3 className="text-md mb-2 group-hover/item:underline underline-offset-1">
          Tawer.tn
        </h3>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex
          ratione distinctio quae similique velit Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt suscipit magni ipsa veritatis,
          nihil natus, quod laborum illo corrupti nemo at beatae similique
          provident, distinctio reprehenderit est numquam aliquid sit?
        </p>
      </div>
    </div>
  );
};

export default ExperimentCard;
