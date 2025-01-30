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
      className={`p-2 text-lg font-thin hover:underline hover:decoration-1 hover:underline-offset-4 ${active ? "text-orange-500 dark:text-NeonLime-500 font-normal" : "text-gray-800 dark:text-gray-300 font-thin"} ${classNames}`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default LinkBox;
