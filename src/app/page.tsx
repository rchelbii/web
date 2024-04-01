import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { poppins } from "./layout";
import Expriments from "@/presentation/sections/Experiments";
import RecentWork from "@/presentation/sections/RecentWork";
import MediaContact from "@/presentation/components/MediaContact";
import Header from "@/presentation/sections/Header";

export default function Home() {
  return (
    <div className="w-full bg-white dark:bg-dark-gray">
      <main className="container mx-auto">
        <Header />
        <RecentWork />
        <Expriments />
      </main>
    </div>
  );
}
