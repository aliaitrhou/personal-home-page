import React from "react";
import ContentBox from "@/components/content-box";
import Link from "next/link";
import ProjectMetaData, { ToolBox } from "@/components/project-meta-data";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import exami from "@/public/imgs/projects/exami/exami.png";
import exami_teacher from "@/public/imgs/projects/exami/exami_teacher.png";
import exami_create_exam from "@/public/imgs/projects/exami/exami_create_exam.png";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo, SiLangchain, SiOpenai } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

const ShellAgent = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox title="Description">
          <p className="text-justify indent-6 mb-3">
            Participated with 2 persons in building Exmination platform for our
            javascript class at university, we took the challenge to build,
            secure and scale it using only vanilla javascript.
          </p>
          <Image alt="exami thumnail" src={exami} className="rounded-md mb-6" />
          <p>
            at the end we came out with functional system where you can create
            exams and pass them.
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
              color="red"
              icon={<TbBrandReactNative className="size-3" />}
              href="https://reactnative.dev/"
            >
              React Native,
            </ToolBox>
            <ToolBox color="orange" href="https://nativebase.io/">
              Native Base,
            </ToolBox>
            <ToolBox
              color="green"
              icon={<FaNodeJs className="size-3" />}
              href="https://nodejs.org"
            >
              NodeJs,
            </ToolBox>
            <ToolBox
              color="yellow"
              icon={<SiExpo className="size-3" />}
              href="https://nodejs.org"
            >
              Expo,
            </ToolBox>
            <ToolBox
              color="white"
              icon={<SiLangchain className="size-4" />}
              href="https://www.langchain.com/"
            >
              Langchain,
            </ToolBox>
            <ToolBox
              color="blue"
              icon={<SiOpenai className="size-3" />}
              href="https://github.com/openai/openai-node"
            >
              OpenAI-Node,
            </ToolBox>
            <ToolBox
              color="green"
              icon={<RiSupabaseFill className="size-3" />}
              href="https://supabase.com/"
            >
              Supabase.
            </ToolBox>
          </ProjectMetaData>
          <ProjectMetaData title="Deployment">Not Deployed.</ProjectMetaData>
          <ProjectMetaData title="Website">
            Not-hosted for now.
            {/* <Link */}
            {/*   href={"https://vidotrans.onrender.com"} */}
            {/*   target="_blank" */}
            {/*   className="hover:underline underline-offset-1 text-yellow-500 dark:text-emerald-400" */}
            {/* > */}
            {/*   https://vidotrans.onrender.com */}
            {/* </Link> */}
          </ProjectMetaData>
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
            className="rounded-md my-4"
          />
          <Image
            alt="exami create exam"
            src={exami_create_exam}
            className="rounded-md mb-6"
          />
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default ShellAgent;
