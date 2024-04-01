import { poppins } from "@/app/layout";
import React from "react";

const Intro = () => {
  return (
    <div className="text-black flex flex-row items-center gap-10 py-8 dark:text-white">
      <h1 className="text-4xl">
        Riadh
        <br /> Chelbi
      </h1>
      <p
        className={`${poppins.variable} font-poppins w-80 text-sm tracking-wide`}
      >
        I'm a software developer passionate about open source, sustainable tech.
        I write programs that anyone is allowed to execute, study, modify, or
        redistribute.
      </p>
    </div>
  );
};

export default Intro;
