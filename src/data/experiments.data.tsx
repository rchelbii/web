import { ExperimentCardProps } from "./types";
import { FaRocket, FaTextHeight, FaWhmcs } from "react-icons/fa";
export const experimentsData: ExperimentCardProps[] = [
  {
    title: "Hello, World",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed culpa numquam, porro doloremque quae vero corporis expedita dolore officia animi voluptate error, deserunt dolores exercitationem maiores totam enim cum.",
    icon: <FaRocket />,
  },
  {
    title: "Hello, World",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed culpa numquam, porro doloremque quae vero corporis expedita dolore officia animi voluptate error, deserunt dolores exercitationem maiores totam enim cum.",
    icon: <FaTextHeight />,
  },
  {
    title: "Hello, World",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed culpa numquam, porro doloremque quae vero corporis expedita dolore officia animi voluptate error, deserunt dolores exercitationem maiores totam enim cum.",
    icon: <FaWhmcs />,
  },
];
