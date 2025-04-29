import React from "react";
import ContentBox from "@/components/content-box";
import Link from "next/link";
import ProjectMetaData from "@/components/project-meta-data";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import terminal from "@/public/imgs/projects/shell_agent_terminal.png";
import shell_agent_2 from "@/public/imgs/projects/shell_agent_2.png";
import shell_agent_3 from "@/public/imgs/projects/shell_agent_3.png";

const ShellAgent = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox title="Description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Image
            alt="shell agent terminal"
            src={terminal}
            className="dark:bg-zinc-300/20 my-4 rounded-2xl"
          />
        </ContentBox>
      </AnimationBox>
      <AnimationBox delay={0.2}>
        <ContentBox title="Project Info" styles="px-2 sm:px-4">
          <ProjectMetaData title="Platform">Web Application.</ProjectMetaData>
          <ProjectMetaData title="Website">
            <Link
              href={"https://shellagent.vercel.app/"}
              target="_blank"
              className="underline underline-offset-1 text-yellow-500 dark:text-emerald-400"
            >
              https://shellagent.vercel.app
            </Link>
          </ProjectMetaData>
          <ProjectMetaData title="Tech Stack">
            Nextjs, Typescript, TogetherAI, Python.
          </ProjectMetaData>
          <Image
            alt="shell agent landing"
            src={shell_agent_2}
            className="my-8 rounded-md"
          />
          <Image
            alt="shell agent workspace"
            src={shell_agent_3}
            className="mb-8 rounded-md"
          />
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default ShellAgent;
