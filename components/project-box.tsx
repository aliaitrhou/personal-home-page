import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Props {
  children: React.ReactNode;
  href: string;
  thumnail: StaticImageData;
  projectName: string;
  date: string;
}

const ProjectBox: React.FC<Props> = ({
  children,
  href,
  thumnail,
  projectName,
  date,
}) => {
  return (
    <div className="w-full mx-auto px-2">
      <Link href={href} className="space-y-3">
        <Image
          className={`object-fill w-full aspect-[14/8] rounded-t-lg border border-neutral-300 dark:border-neutral-700`}
          src={thumnail}
          alt={projectName}
        />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r dark:from-NeonLime-500 dark:to-emerald-200 from-red-500 via-red-400 to-orange-400">
              {projectName}
            </span>
            <span className="rounded-sm bg-amber-300/60 text-zinc-500 dark:bg-zinc-400/30 dark:text-zinc-300 px-2 text-xs">
              {date}
            </span>
          </div>
          <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
            {children}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectBox;
