import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaVoicemail,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const MediaContact = () => {
  return (
    <div className="flex flex-row gap-3 pb-4">
      <Link
        href={"mailto:rrchelbi@gmail.com"}
        target="_blank"
        className="ease-out duration-500 p-2 hover:rounded-full hover:scale-110 text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
      >
        <MdOutlineMailOutline className="w-6 h-auto" />
      </Link>
      <Link
        href={"https://github.com/rchelbii"}
        target="_blank"
        className="ease-out duration-500 p-2 hover:rounded-full hover:scale-110 text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
      >
        <FaGithub className="w-6 h-auto" />
      </Link>
      <Link
        href={"https://linkedin.com/in/rchelbii"}
        target="_blank"
        className="ease-out duration-500 p-2 hover:rounded-full hover:scale-110 text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
      >
        <FaLinkedinIn className="w-6 h-auto" />
      </Link>
      <Link
        href={"https://instagram.com/rchelbii"}
        target="_blank"
        className="ease-out duration-500 p-2 hover:rounded-full hover:scale-110 text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
      >
        <FaInstagram className="w-6 h-auto" />
      </Link>
    </div>
  );
};

export default MediaContact;
