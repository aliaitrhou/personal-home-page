"use client";
import Link from "next/link";
import { great_vibes } from "@/app/fonts";
import { GiBoomerang } from "react-icons/gi";
import { Title } from "./title";
import { getProjectBySlug } from "@/data/projects";
import { usePathname } from "next/navigation";
import projectDetail from "@/lib/project-details";
import { AnimatePresence, motion } from "framer-motion";

const Logo = () => {
  const pathname = usePathname();
  const isProjectDetail = projectDetail(pathname);
  const match = pathname?.match(/^\/projects\/([^/]+)$/);
  const project = match ? getProjectBySlug(match[1]) : undefined;

  return (
    <div className="self-end flex items-center gap-1.5 text-neutral-800 dark:text-white">
      <Link href={"/"} className="group focus:outline-none">
        <GiBoomerang className="inline mr-2 mb-1 rotate-[8deg] group-hover:rotate-[0deg] text-neutral-800 dark:text-white transition-all duration-400 ease-in-out text-md md:text-lg " />
        <h1
          className={`inline ${great_vibes.className} text-md md:text-lg font-bold`}
        >
          Ali Ait Rahou
        </h1>
      </Link>

      <AnimatePresence mode="wait">
        {isProjectDetail && project && (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, x: -10, filter: "blur(3px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -6, filter: "blur(3px)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Title year={project.year}>{project.name}</Title>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Logo;
