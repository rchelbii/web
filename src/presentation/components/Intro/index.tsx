import { poppins } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import avatar from "@/../public/avatar.png";

const Intro = () => {
  return (
    <div className="text-black flex flex-col md:flex-row items-center md:items-end gap-5 py-8 dark:text-white">
      <div className="flex items-center">
        <Image src={avatar} alt="" className="w-20 block md:hidden " />
        <h1 className="text-3xl md:text-5xl lg:text-4xl tracking-wide">
          Riadh
          <br /> Chelbi
        </h1>
      </div>

      <p
        className={`${poppins.variable} font-poppins w-11/12 md:w-96 text-sm md:text-base tracking-wide`}
      >
        I&apos;m a software developer passionate about open source, sustainable
        tech. I write programs that anyone is allowed to execute, study, modify,
        or redistribute.
      </p>
      <Image
        src={avatar}
        alt=""
        className="w-36 hidden md:block transform -scale-x-100"
      />
    </div>
  );
};

export default Intro;
