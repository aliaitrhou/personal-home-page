"use client";

import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { lexend } from "@/app/fonts";

const EmailButton = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <Link
        href="/contact"
        className="group flex items-center gap-1 sm:gap-2 py-1 px-2 sm:py-2 sm:px-4 rounded-md bg-orange-500 text-white dark:bg-NeonLime-500 dark:text-black"
      >
        <IoMdMail className="size-3 sm:size-4" />
        <p className={`${lexend.className} text-xs`}>Send Email</p>
        <FaChevronRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default EmailButton;
