import React from "react";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { saira } from "@/app/fonts";

interface MediaProps {
  url: string;
  platform: string;
}

const MediaBox: React.FC<MediaProps> = ({ url, platform }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className={`flex gap-[0.3px] items-center rounded-md w-fit font-light ${saira.className} bg-neutral-200/80 dark:bg-neutral-300/20 rounded-xl px-2 py-[0.2px] text-sm group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
    >
      <span>{platform}</span>
      <HiMiniArrowUpRight className="" />
    </Link>
  );
};

export default MediaBox;
