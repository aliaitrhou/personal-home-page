// import React from "react";
// import Link from "next/link";
// import Image, { StaticImageData } from "next/image";
// import { FaSquareGithub } from "react-icons/fa6";
//
// interface Props {
//   children: React.ReactNode;
//   href: string;
//   thumnail: StaticImageData;
//   projectName: string;
//   date: string;
//   techStack: React.ReactNode;
// }
//
// const ProjectBox: React.FC<Props> = ({
//   children,
//   href,
//   thumnail,
//   projectName,
//   date,
//   techStack,
// }) => {
//   return (
//     <div className="w-full mx-auto border border-zinc-700 p-4 rounded-xl bg-gradient-to-rb from-teal-300  to-NeonLime-500">
//       <div className="space-y-3">
//         <Link href={href}>
//           <Image
//             className={`object-fill w-full aspect-[14/8] rounded-lg border border-neutral-300 dark:border-neutral-700`}
//             src={thumnail}
//             alt={projectName}
//           />
//         </Link>
//         <div className="space-y-2">
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r dark:from-NeonLime-500 dark:to-emerald-200 from-red-500 via-red-400 to-orange-400">
//               {projectName}
//             </span>
//             <span className="rounded-sm bg-amber-300/60 text-zinc-500 dark:bg-zinc-400/30 dark:text-zinc-300 px-2 text-xs">
//               {date}
//             </span>
//           </div>
//           <p className="text-justify text-sm text-zinc-700 dark:text-zinc-300">
//             {children}
//           </p>
//           <div className="flex items-center justify-between gap-2">
//             <div>{techStack}</div>
//             <FaSquareGithub />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default ProjectBox;

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaSquareGithub } from "react-icons/fa6";

interface Props {
  children: React.ReactNode;
  href: string;
  thumnail: StaticImageData;
  projectName: string;
  date: string;
  techStack: React.ReactNode;
}

const ProjectBox: React.FC<Props> = ({
  children,
  href,
  thumnail,
  projectName,
  date,
  techStack,
}) => {
  return (
    <div className="group w-full mx-auto rounded-xl bg-zinc-700/30 border border-zinc-600/15 hover:border-zinc-700 transition-all duration-300 p-3">
      <Link href={href}>
        <Image
          className={`object-fill w-full aspect-[14/8] rounded-lg border border-neutral-500 dark:border-neutral-700`}
          src={thumnail}
          alt={projectName}
        />
      </Link>

      <div className="py-2 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm text-transparent bg-clip-text bg-gradient-to-r dark:from-NeonLime-600 dark:to-emerald-200 from-red-500 via-red-400 to-orange-400">
            {projectName}
          </h3>
          <span className="shrink-0 px-2 py-0.5 text-xs font-medium text-zinc-400 bg-zinc-800/80 rounded-md">
            {date}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-zinc-400">{children}</p>

        <div className="flex items-center justify-between pt-3 border-t border-zinc-700/40">
          <div className="flex-1">{techStack}</div>
          <Link
            href={href}
            className="text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
            aria-label={`View ${projectName} on GitHub`}
          >
            <FaSquareGithub className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
