import React from "react";
import Card from "./Card";
import { recentWorkData } from "@/data/recent-work.data";

const WorkWall = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 place-content-center place-items-center">
      {recentWorkData.map((item, index) => (
        <Card {...item} />
      ))}
    </div>
  );
};

export default WorkWall;
