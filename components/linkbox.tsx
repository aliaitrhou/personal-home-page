import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  url: string;
  children: React.ReactNode | string;
  classNames?: string;
  onClick?: () => void;
}

const LinkBox: React.FC<Props> = ({
  href,
  url,
  children,
  classNames,
  onClick,
}) => {
  const active = url === href;
  return (
    <Link
      className={`p-2 text-lg font-thin hover:underline hover:decoration-1 hover:underline-offset-4 ${active ? "text-orange-500 dark:text-NeonLime-500 font-normal" : "text-gray-800 dark:text-gray-300 font-thin"} ${classNames}`}
      href={href}
      onClick={onClick}
    >
      <li>{children}</li>
    </Link>
  );
};

export default LinkBox;
