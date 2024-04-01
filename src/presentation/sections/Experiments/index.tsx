import ExperimentCard from "@/presentation/components/ExperimentCard";
import React from "react";
import { FaRocket, FaTextHeight, FaWhmcs } from "react-icons/fa";

const Expriments = () => {
  return (
    <section className="py-6">
      <h2 className="text-2xl capitalize tracking-wide">Exprimenets</h2>
      <ExperimentCard>
        <FaRocket />
      </ExperimentCard>
      <ExperimentCard>
        <FaTextHeight />
      </ExperimentCard>
      <ExperimentCard>
        <FaWhmcs />
      </ExperimentCard>
    </section>
  );
};

export default Expriments;
