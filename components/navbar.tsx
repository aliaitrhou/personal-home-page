"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { saira } from "@/app/fonts";
import { FiFolder, FiAward, FiMail, FiUser } from "react-icons/fi";

interface NavCardItem {
  href: string;
  label: string;
  hint: string;
  icon: React.ReactNode;
  external?: boolean;
}

const cards: NavCardItem[] = [
  {
    href: "/",
    label: "Home",
    hint: "About",
    icon: <FiUser />,
  },
  {
    href: "/projects",
    label: "Projects",
    hint: "See what I've built",
    icon: <FiFolder />,
  },
  {
    href: "/certificates",
    label: "Certificates",
    hint: "Verified skills",
    icon: <FiAward />,
  },
  {
    href: "/contact",
    label: "Contact",
    hint: "Say hello",
    icon: <FiMail />,
  },
  // {
  //   href: "https://github.com/aliaitrhou/personal_home_page",
  //   label: "Source",
  //   hint: "Peek the code",
  //   icon: <FaGithub />,
  //   external: true,
  // },
];

interface NavCardsProps {
  classNames?: string;
}

const NavCards: React.FC<NavCardsProps> = ({ classNames }) => {
  const pathname = usePathname();

  return (
    <nav
      className={`w-full max-w-xl mx-auto ${saira.className} ${classNames ?? ""} bg-white dark:bg-black`}
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 border border border-solid border-neutral-300 dark:border-neutral-700">
        {cards.map((card, i) => {
          const isActive = pathname === card.href;
          const dividerClasses = [
            i % 2 === 1 ? "border-l" : "",
            i >= 2 ? "border-t sm:border-t-0" : "",
            i > 0 ? "sm:border-l" : "",
          ]
            .filter(Boolean)
            .join(" ");

          const content = (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="group flex flex-col items-center justify-center gap-2 py-3 px-2 text-center transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-xl transition-colors ${
                    isActive
                      ? "text-orange-500 dark:text-NeonLime-500"
                      : "text-neutral-500 dark:text-neutral-400 group-hover:text-orange-500 dark:group-hover:text-NeonLime-500"
                  }`}
                >
                  {card.icon}
                </span>
                <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
                  {card.label}
                </span>
              </div>
              {/* <span className="text-xs font-light text-neutral-400 dark:text-neutral-500"> */}
              {/*   {card.hint} */}
              {/* </span> */}
            </motion.div>
          );

          return (
            <div
              key={card.href}
              className={`border-solid border-neutral-300 dark:border-neutral-700 ${dividerClasses}`}
            >
              {card.external ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none"
                >
                  {content}
                </a>
              ) : (
                <Link href={card.href} className="block focus:outline-none">
                  {content}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavCards;
