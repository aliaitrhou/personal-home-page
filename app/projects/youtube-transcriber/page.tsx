import React from "react";
import ContentBox from "@/components/content-box";
import Link from "next/link";
import ProjectMetaData, { ToolBox } from "@/components/project-meta-data";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import yt_transcriber from "@/public/imgs/projects/yt_transcriber/yt_transcriber.png";
import demo from "@/public/imgs/projects/yt_transcriber/demo.gif";
import { FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiChakraui, SiOpenai } from "react-icons/si";

const ShellAgent = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox title="Description">
          <p className="text-justify indent-6">
            A tool to transcribe any YouTube video into your language of choice.
            I built it while trying the nextjs app router, and openai python
            library.
          </p>
          <Image
            alt="youtube transcriber overview"
            src={yt_transcriber}
            className="my-4 shadow-lg border border-gray-300"
          />
          <p>
            The UI was originally developed with Stitches, a CSS-in-JS library,
            but Stitches is no longer actively maintained, I rewrote the
            interface using Chakra UI, which is built on a more stable and
            flexible styling system.
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
            <ToolBox
              color="yellow"
              icon={<SiOpenai className="size-3" />}
              href="https://github.com/openai/openai-python"
            >
              OpenAI-Python,
            </ToolBox>
            <ToolBox
              color="orange"
              icon={<SiChakraui />}
              href="https://chakra-ui.com/"
            >
              ChakraUI.
            </ToolBox>
          </ProjectMetaData>
          <ProjectMetaData title="Deployment">
            Deployed to internet using Render.
          </ProjectMetaData>
          <ProjectMetaData title="Website">
            <Link
              href={"https://vidotrans.onrender.com"}
              target="_blank"
              className="hover:underline underline-offset-1 text-yellow-500 dark:text-emerald-400"
            >
              https://vidotrans.onrender.com
            </Link>
          </ProjectMetaData>
          <ProjectMetaData title="Source Code">
            <Link
              href={"https://github.com/aliaitrhou/youtube-transcriber"}
              target="_blank"
              className="hover:underline underline-offset-1 text-yellow-500 dark:text-emerald-400"
            >
              https://github.com/aliaitrhou/youtube-transcriber
            </Link>
          </ProjectMetaData>
          <Image
            alt="youtube transcriber demo"
            src={demo}
            className="my-8 rounded-sm shadow-2xl"
          />
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default ShellAgent;
