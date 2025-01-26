import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  url: string;
  children: React.ReactNode | string;
  classNames?: string;
}

const LinkBox: React.FC<Props> = ({ href, url, children, classNames }) => {
  const active = url === href;
  return (
    <li
      className={`p-2 ${active ? "bg-teal-500 dark:bg-[#b2ff66] text-white dark:text-gray-800" : "text-gray-800 dark:text-gray-300"} ${classNames}`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default LinkBox;
