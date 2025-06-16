import React from "react";
import ContentBox from "@/components/content-box";
import Link from "next/link";
import ProjectMetaData, { ToolBox } from "@/components/project-meta-data";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import exami from "@/public/imgs/projects/exami/exami.png";
import exami_teacher from "@/public/imgs/projects/exami/exami_teacher.png";
import exami_create_exam from "@/public/imgs/projects/exami/exami_create_exam.png";
import { FaKey } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

const ShellAgent = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox title="Description">
          <p className="text-justify indent-6">
            Collaborated with two teammates to design, build, scale, and secure
            an online examination platform using only vanilla JavaScript, as
            part of our university JavaScript class.
            <Image
              alt="exami thumnail"
              src={exami}
              className="rounded-md my-4"
            />
          </p>
          <p>
            In the end, we built a working system where teachers could create as
            many exams as needed and share them directly with students to take
            online.
          </p>
        </ContentBox>
      </AnimationBox>
      <AnimationBox delay={0.2}>
        <ContentBox title="Project Info" styles="px-2 sm:px-4">
          <ProjectMetaData title="Platform">Web.</ProjectMetaData>
          <ProjectMetaData
            title="Tech Stack"
            styles="flex flex-wrap items-center gap-2 mt-1 sm:mt-0"
          >
            <ToolBox
              color="yellow"
              icon={<RiJavascriptFill className="size-4" />}
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              javascript,
            </ToolBox>
            <ToolBox
              color="blue"
              icon={<RiTailwindCssFill className="size-3" />}
              href="https://tailwindcss.com/"
            >
              Tailwindcss
            </ToolBox>
            <ToolBox
              color="black"
              icon={
                <SiExpress className="size-4 border border-black rounded-md" />
              }
              href="https://expressjs.com/"
            >
              ExpressJS
            </ToolBox>
            <ToolBox
              color="blue"
              icon={<BiLogoPostgresql className="size-4" />}
              href="https://postgresql.org/"
            >
              Postgresql,
            </ToolBox>
            <ToolBox
              color="orange"
              icon={<FaKey className="size-3" />}
              href="https://jwt.io/"
            >
              JWT.
            </ToolBox>
          </ProjectMetaData>
          <ProjectMetaData title="Deployment">Not Deployed.</ProjectMetaData>
          <ProjectMetaData title="Website">Not-hosted for now.</ProjectMetaData>
          <ProjectMetaData title="Source Code">
            <Link
              href={"https://github.com/aliaitrhou/youtube-transcriber"}
              target="_blank"
              className="hover:underline underline-offset-1 text-yellow-500 dark:text-emerald-400"
            >
              https://github.com/aliaitrhou/exami
            </Link>
          </ProjectMetaData>
          <Image
            alt="exami teacher dashboard"
            src={exami_teacher}
            className="rounded-md my-4 shadow-2xl"
          />
          <Image
            alt="exami create exam"
            src={exami_create_exam}
            className="rounded-md mb-6 shadow-2xl"
          />
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default ShellAgent;
