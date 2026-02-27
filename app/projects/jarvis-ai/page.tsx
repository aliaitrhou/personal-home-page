import ContentBox from "@/components/content-box";
import Link from "next/link";
import ProjectMetaData, { ToolBox } from "@/components/project-meta-data";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import jarvis_1 from "@/public/imgs/projects/jarvis_ai/jarvis_1_nobg.png";
import jarvis_ios_settings from "@/public/imgs/projects/jarvis_ai/jarvis_3.png";
import jarvis_android_settings from "@/public/imgs/projects/jarvis_ai/jarvis_4.png";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo, SiLangchain, SiOpenai } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { saira } from '@/app/fonts'

const ShellAgent = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox title="Description">
          <p className={`text-justify indent-6 mb-3 ${saira.className}`}>
            Personal assistant designed to learn from you, featuring an AI agent
            that evolves through interaction and improves personalization with
            each conversation. Built while studying the LangChain framework and
            advanced Retrieval-Augmented Generation (RAG) techniques.
          </p>
          <div className="flex flex-col justify-center sm:flex-row  sm:items-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
            <Image
              alt="shell agent terminal"
              src={jarvis_1}
              className="rounded-lg mx-auto sm:h-96 sm:w-1/2"
            />
            <Image
              alt="shell agent terminal"
              src={jarvis_1}
              className="rounded-lg mx-auto sm:h-96 sm:w-1/2"
            />
          </div>
        </ContentBox>
      </AnimationBox>
      <AnimationBox delay={0.2}>
        <ContentBox title="Project Info">
          <ProjectMetaData title="Platform">IOS, Android.</ProjectMetaData>
          <ProjectMetaData
            title="Tech Stack"
            styles="flex flex-wrap items-center gap-2 mt-1 sm:mt-0"
          >
            <ToolBox
              color="red"
              icon={<TbBrandReactNative className="size-3" />}
              href="https://reactnative.dev/"
              title="React Native,"
            />
            <ToolBox 
              color="orange"
              href="https://nativebase.io/"
              title="Native Base,"
            />
            <ToolBox
              color="green"
              icon={<FaNodeJs className="size-3" />}
              href="https://nodejs.org"
              title="NodeJs,"
            />
            <ToolBox
              color="yellow"
              icon={<SiExpo className="size-3" />}
              href="https://nodejs.org"
              title="Expo,"
            />
            <ToolBox
              color="white"
              icon={<SiLangchain className="size-4" />}
              href="https://www.langchain.com/"
              title="Langchain,"
            />
            <ToolBox
              color="blue"
              icon={<SiOpenai className="size-3" />}
              href="https://github.com/openai/openai-node"
              title="OpenAI-Node,"
            />
            <ToolBox
              color="green"
              icon={<RiSupabaseFill className="size-3" />}
              href="https://supabase.com/"
              title="Supabase."
            />
          </ProjectMetaData>
          <ProjectMetaData title="Source Code">
            <Link
              href={"https://github.com/aliaitrhou/youtube-transcriber"}
              target="_blank"
              className="hover:underline underline-offset-1 text-yellow-500 dark:text-emerald-400"
            >
              https://github.com/aliaitrhou/jarvis-ai
            </Link>
          </ProjectMetaData>
          <div className="flex flex-col justify-center sm:flex-row  sm:items-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 my-4">
            <Image
              alt="shell agent terminal"
              src={jarvis_android_settings}
              className="rounded-lg mx-auto sm:h-[450px] sm:w-1/2"
            />
            <Image
              alt="shell agent terminal"
              src={jarvis_ios_settings}
              className="rounded-lg mx-auto sm:h-[450px] sm:w-1/2"
            />
          </div>
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default ShellAgent;
