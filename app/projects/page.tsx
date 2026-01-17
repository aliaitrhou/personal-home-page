import React from "react";
import ProjectBox from "@/components/project-box";
import shell_agent_thumnail from "@/public/imgs/projects/shell_agent/shell_agent_thumnail.png";
import jarvis_thumnail from "@/public/imgs/projects/jarvis_ai/jarvis-android-ios.png";
import youtube_trascriber_thumnail from "@/public/imgs/projects/yt_transcriber/yt_tanscriber_thumnail.png";
import exami_thumnail from "@/public/imgs/projects/exami/exami.png";
import AnimationBox from "@/components/animation-box";
import ContentBox from "@/components/content-box";
import { ToolBox } from "@/components/project-meta-data";
import { FaDocker, FaKey, FaNodeJs } from "react-icons/fa";
import {
  RiDatabase2Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiChakraui,
  SiClerk,
  SiExpo,
  SiExpress,
  SiLangchain,
  SiNativescript,
  SiOpenai,
  SiPrisma,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";

const Projects = () => {
  return (
    <section className="py-3 sm:py-2 md:py-0 space-y-4 sm:space-y-6 md:space-y-8">
      <ContentBox title="Open Source" styles="px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 md:gap-14">
          <AnimationBox delay={0.1}>
            <ProjectBox
              href="/projects/shell-agent"
              thumnail={shell_agent_thumnail}
              projectName="Shell Agent"
              date="2025"
              techStack={
                <div className="flex flex-wrap items-center gap-2">
                  <ToolBox
                    color="green"
                    icon={<FaNodeJs className="size-3" />}
                    href="https://nodejs.org"
                    title="NodeJs"
                  />
                  <ToolBox
                    color="blue"
                    icon={<RiNextjsFill className="size-[14px]" />}
                    href="https://nextjs.org/"
                    title="NextJs"
                  />
                  <ToolBox
                    color="white"
                    icon={<SiClerk className="size-[11px]" />}
                    href="https://clerk.com"
                    title="Clerk"
                  />
                  <ToolBox
                    color="yellow"
                    icon={<SiPrisma className="size-3" />}
                    href="https://www.prisma.io/"
                    title="PrismaORM"
                  />
                  <ToolBox
                    color="blue"
                    icon={<FaDocker className="size-4" />}
                    href="https://docker.com"
                    title="Docker"
                  />
                  <ToolBox
                    color="red"
                    icon={<DiRedis className="size-5" />}
                    href="https://redis.io"
                    title="Redis"
                  />
                  <ToolBox
                    color="orange"
                    icon={<RiDatabase2Fill className="size-3" />}
                    href="https://neon.tech"
                    title="NeonDB"
                  />
                </div>
              }
            >
              A web app for CS Students to learn about operating systems & Linux
              commands in an intuitive way
            </ProjectBox>
          </AnimationBox>
          <AnimationBox delay={0.2}>
            <ProjectBox
              href="/projects/jarvis-ai"
              thumnail={jarvis_thumnail}
              projectName="Jarvis AI"
              date="2024"
              techStack={
                <div className="flex flex-wrap items-center gap-2">
                  <ToolBox
                    color="red"
                    icon={<TbBrandReactNative className="size-3" />}
                    href="https://reactnative.dev/"
                    title="React Native"
                  />
                  <ToolBox
                    color="orange"
                    href="https://nativebase.io/"
                    icon={<SiNativescript className="size-3" />}
                    title="Native Base"
                  />
                  <ToolBox
                    color="green"
                    icon={<FaNodeJs className="size-3" />}
                    href="https://nodejs.org"
                    title="NodeJs"
                  />
                  <ToolBox
                    color="yellow"
                    icon={<SiExpo className="size-3" />}
                    href="https://nodejs.org"
                    title="Expo"
                  />
                  <ToolBox
                    color="green"
                    icon={<SiLangchain className="size-4" />}
                    href="https://www.langchain.com/"
                    title="Langchain"
                  />
                  <ToolBox
                    color="white"
                    icon={<SiOpenai className="size-3" />}
                    href="https://github.com/openai/openai-node"
                    title="OpenAI-Node"
                  />
                  <ToolBox
                    color="green"
                    icon={<RiSupabaseFill className="size-3" />}
                    href="https://supabase.com/"
                    title="Supabase"
                  />
                </div>
              }
            >
              Personal assistant that engages in conversations and personalizes
              interactions over time.
            </ProjectBox>
          </AnimationBox>
          <AnimationBox delay={0.3}>
            <ProjectBox
              href="/projects/youtube-transcriber"
              thumnail={youtube_trascriber_thumnail}
              projectName="Youtube Transcriber"
              date="2024"
              techStack={
                <div className="flex flex-wrap items-center gap-2">
                  <ToolBox
                    color="green"
                    icon={<FaNodeJs className="size-3" />}
                    href="https://nodejs.org"
                    title="NodeJs"
                  />
                  <ToolBox
                    color="blue"
                    icon={<RiNextjsFill className="size-[14px]" />}
                    href="https://nextjs.org/"
                    title="NextJs"
                  />
                  <ToolBox
                    color="yellow"
                    icon={<SiOpenai className="size-3" />}
                    href="https://github.com/openai/openai-python"
                    title="OpenAI-Python"
                  />
                  <ToolBox
                    color="orange"
                    icon={<SiChakraui />}
                    href="https://chakra-ui.com/"
                    title="ChakraUI"
                  />
                </div>
              }
            >
              An Ai 🤖 tool to transcript and translate youtube videos to any
              language.
            </ProjectBox>
          </AnimationBox>
        </div>
      </ContentBox>
      <div className="border-t border-zinc-700" />
      <ContentBox title="Colaborations" styles="px-3 sm:px-5 sm:py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 md:gap-14">
          <AnimationBox delay={0.4}>
            <ProjectBox
              href="/projects/exami"
              thumnail={exami_thumnail}
              projectName="Exami"
              date="2025"
              techStack={
                <div className="flex flex-wrap items-center gap-2">
                  <ToolBox
                    color="yellow"
                    icon={<RiJavascriptFill className="size-4" />}
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    title="JavaScript"
                  />
                  <ToolBox
                    color="blue"
                    icon={<RiTailwindCssFill className="size-3" />}
                    href="https://tailwindcss.com/"
                    title="Tailwindcss"
                  />
                  <ToolBox
                    color="black"
                    icon={
                      <SiExpress className="size-4 border border-black rounded-md" />
                    }
                    href="https://expressjs.com/"
                    title="ExpressJS"
                  />
                  <ToolBox
                    color="blue"
                    icon={<BiLogoPostgresql className="size-4" />}
                    href="https://postgresql.org/"
                    title="Postgresql"
                  />
                  <ToolBox
                    color="orange"
                    icon={<FaKey className="size-3" />}
                    href="https://jwt.io/"
                    title="JSON Web Token"
                  />
                </div>
              }
            >
              Examination paltform for teachers to create online exams and for
              students to pass them.
            </ProjectBox>
          </AnimationBox>
        </div>
      </ContentBox>
    </section>
  );
};

export default Projects;
