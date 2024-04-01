import ExperimentCard from "@/presentation/components/ExperimentCard";
import React from "react";
import { experimentsData } from "@/data/experiments.data";

const Expriments = () => {
  return (
    <section className="py-6">
      <h2 className="text-2xl capitalize tracking-wide">Experimenets</h2>
      {experimentsData.map((item, index) => (
        <ExperimentCard {...item} key={index} />
      ))}
    </section>
  );
};

export default Expriments;
