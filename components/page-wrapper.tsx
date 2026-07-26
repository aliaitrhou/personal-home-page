"use client";

import React from "react";
import dynamic from "next/dynamic";
import VoxelOfficeLoader from "./voxel-office-loader";
import { Intro } from "./intro";
import Navbar from "./navbar";
import { HomeIntroReplay } from "./intro-replay";
import { usePathname } from "next/navigation";
import projectDetail from "@/lib/project-details";
import { ProjectHeader } from "./project-header";
import { getProjectBySlug } from "@/data/projects";
import ProjectMetaData, { ToolBox } from "./project-meta-data";
import { motion, AnimatePresence } from "framer-motion";

const LazyVoxelOffice = dynamic(() => import("./voxel-office"), {
  ssr: false,
  loading: () => <VoxelOfficeLoader />,
});

interface Props {
  classNames?: string;
  children: React.ReactNode;
}
function VimFingersMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
      focusable="false"
      className="home-vim-mark"
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        stroke="currentColor"
      >
        <rect
          x="1.75"
          y="4.75"
          width="14.5"
          height="9.5"
          rx="1.5"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <rect x="1.75" y="4.75" width="14.5" height="9.5" rx="1.5" />
      </g>
      <rect
        className="home-key home-key-a"
        x="4"
        y="7.25"
        width="2.4"
        height="2"
        rx="0.5"
        fill="currentColor"
      />
      <rect
        className="home-key home-key-b"
        x="7.3"
        y="7.25"
        width="2.4"
        height="2"
        rx="0.5"
        fill="currentColor"
      />
      <rect
        className="home-key home-key-c"
        x="10.6"
        y="7.25"
        width="2.4"
        height="2"
        rx="0.5"
        fill="currentColor"
      />
      <rect
        className="home-cursor"
        x="4"
        y="10.75"
        width="6.5"
        height="1.4"
        rx="0.3"
        fill="currentColor"
      />
    </svg>
  );
}

function TypedText({ text }: { text: string }) {
  let letterIndex = 0;
  const words = text.split(" ");

  return (
    <span className="home-typed-text">
      {words.map((word, wi) => (
        <span className="home-typed-word" key={wi}>
          {word.split("").map((char, ci) => {
            const delay = letterIndex * 28;
            letterIndex++;
            return (
              <span
                key={ci}
                className="home-typed-letter"
                style={{ animationDelay: `${delay}ms` }}
              >
                {char}
              </span>
            );
          })}
          {wi < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}

export function CraftPhrase({ text }: { text: string }) {
  return (
    <HomeIntroReplay>
      <TypedText text={text} />
      <VimFingersMark />
    </HomeIntroReplay>
  );
}

const toolListVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const toolItemVariants = {
  hidden: { opacity: 0, y: 6, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const isProjectDetail = projectDetail(pathname);

  const match = pathname?.match(/^\/projects\/([^/]+)$/);
  const project = match ? getProjectBySlug(match[1]) : undefined;

  return (
    <div className="w-full sm:max-w-2xl mx-auto px-2 sm:px-8 md:px-10">
      <div className="w-full flex items-start pt-2">
        <AnimatePresence mode="wait">
          {isProjectDetail && project ? (
            <motion.div
              key={`header-${project.slug}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full self-end"
            >
              <ProjectHeader project={project} />
            </motion.div>
          ) : (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full flex items-start"
            >
              <Intro />
            </motion.div>
          )}
        </AnimatePresence>
        <LazyVoxelOffice />
      </div>

      <AnimatePresence mode="wait">
        {!isProjectDetail ? (
          <motion.p
            key="craft-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full text-sm leading-relaxed leading-6 font-thin"
          >
            Being obsessive about craft is kind of my thing. I refine my
            workflow more than is probably healthy, and I plan to keep coding
            until AI pries the keyboard from my
            <CraftPhrase text="speedy Vim fingers" />.
          </motion.p>
        ) : (
          project && (
            <motion.div
              key={`stack-${project.slug}`}
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={toolListVariants}
              transition={{ duration: 0.2 }}
            >
              <ProjectMetaData title="Tech Stack">
                <div className="w-full flex flex-wrap items-center">
                  {project.tools.map((tool, i) => (
                    <motion.div
                      key={i}
                      variants={toolItemVariants}
                      transition={{ duration: 0.25 }}
                    >
                      <ToolBox
                        {...tool}
                        isLast={i === project.tools.length - 1}
                      />
                    </motion.div>
                  ))}
                </div>
              </ProjectMetaData>
            </motion.div>
          )
        )}
      </AnimatePresence>

      <div className="w-full pt-3 md:pt-5 text-sm font-thin">
        <div className="w-full">
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
