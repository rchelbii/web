import { StaticImageData } from "next/image";

export type ExperimentCardProps = {
  icon: React.ReactNode;
  content: string;
  title: string;
};

export type WorkWallCardProps = {
  link: string;
  imageSource: StaticImageData;
};
