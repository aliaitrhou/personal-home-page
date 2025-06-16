import React from "react";
import ContentBox from "@/components/content-box";
import Link from "next/link";
import ProjectMetaData, { ToolBox } from "@/components/project-meta-data";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import terminal from "@/public/imgs/projects/shell_agent/shell_agent_terminal.png";
// import shell_agent_v1 from "@/public/imgs/projects/shell_agent/shell_agent_v1.png";
import shell_agent_2 from "@/public/imgs/projects/shell_agent/shell_agent_2.png";
import shell_agent_3 from "@/public/imgs/projects/shell_agent/shell_agent_3.png";
import { FaNodeJs } from "react-icons/fa";
import { RiDatabase2Fill, RiNextjsFill } from "react-icons/ri";
import { SiClerk, SiPrisma } from "react-icons/si";

const ShellAgent = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox title="Description">
          <p className="text-justify indent-6">
            I built this app while struggling to learn terminal commands. A
            friend shared a .txt file with command explanations. Instead of
            memorizing it, I thought—why not turn it into an assistant that
            explains itself? That question led to this AI-powered tool.
          </p>
          <Image alt="shell agent terminal" src={terminal} />
          <p className="text-justify">
            Over time, I expanded it so users can now learn and run terminal
            commands directly in the browser, and even interact with real course
            material from my university.
          </p>
        </ContentBox>
      </AnimationBox>
      <AnimationBox delay={0.2}>
        <ContentBox title="Project Info" styles="px-2 sm:px-4">
          <ProjectMetaData title="Platform">Web Application.</ProjectMetaData>
          <ProjectMetaData
            title="Tech Stack"
            styles="flex flex-wrap items-center gap-2 mt-1 sm:mt-0"
          >
            <ToolBox
              color="green"
              icon={<FaNodeJs className="size-3" />}
              href="https://nodejs.org"
            >
              NodeJs,
            </ToolBox>
            <ToolBox
              color="blue"
              icon={<RiNextjsFill className="size-3" />}
              href="https://nextjs.org/"
            >
              NextJs,
            </ToolBox>
            <ToolBox color="white" icon={<SiClerk />} href="https://clerk.com">
              Clerk,
            </ToolBox>
            <ToolBox
              color="yellow"
              icon={<SiPrisma className="size-3" />}
              href="https://www.prisma.io/"
            >
              PrismaORM,
            </ToolBox>
            <ToolBox
              color="red"
              icon={<RiDatabase2Fill className="size-3" />}
              href="https://neon.tech"
            >
              NeonDB.
            </ToolBox>
          </ProjectMetaData>
          <ProjectMetaData title="Hosting">
            Deployed to internet using Vercel.
          </ProjectMetaData>
          <ProjectMetaData title="Website">
            <Link
              href={"https://shellagent.vercel.app/"}
              target="_blank"
              className="hover:underline underline-offset-1 text-yellow-500 dark:text-emerald-400"
            >
              https://shellagent.vercel.app
            </Link>
          </ProjectMetaData>
          <ProjectMetaData title="Source Code">
            <Link
              href={"https://github.com/aliaitrhou/shell-agent"}
              target="_blank"
              className="hover:underline underline-offset-1 text-yellow-500 dark:text-emerald-400"
            >
              https://github.com/aliaitrhou/shell-agent
            </Link>
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
