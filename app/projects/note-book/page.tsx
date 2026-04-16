import ContentBox from "@/components/content-box";
import Link from "next/link";
import ProjectMetaData, { ToolBox } from "@/components/project-meta-data";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import preivew from "@/public/imgs/projects/note_book/preview.png";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { saira } from "@/app/fonts";
import { TbBrandReactNative } from "react-icons/tb";
import { DiSqllite } from "react-icons/di";

const NoteBook = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox
          title="Description"
          styles={`${saira.className} font-light leading-7`}
        >
          <p className="text-justify indent-6">
            I built this app because I wanted a simple place to write and
            organize my notes using markdown. Most tools I tried had too many
            features I never used. I just wanted something clean, fast, and that
            works offline on my desktop.
          </p>
          <Image
            alt="exami thumnail"
            src={preivew}
            className="rounded-md w-full"
          />
          <p className="text-justify">
            The editor is powered by CodeMirror with full Vim keybindings
            support. Both panes stay in sync as you scroll, and each panel can
            be maximized independently and notes persisted locally using SQLite.
          </p>
        </ContentBox>
      </AnimationBox>
      <AnimationBox delay={0.2}>
        <ContentBox title="Project Info">
          <ProjectMetaData title="Platform">Desktop.</ProjectMetaData>
          <ProjectMetaData
            title="Tech Stack"
            styles="flex flex-wrap items-center gap-2 mt-1 sm:mt-0"
          >
            <ToolBox
              color="red"
              icon={<TbBrandReactNative className="size-3" />}
              href="https://reactnative.dev/"
              title="React Native"
            />
            <ToolBox
              color="green"
              icon={<FaNodeJs className="size-3" />}
              href="https://nodejs.org"
              title="NodeJs"
            />
            <ToolBox
              color="blue"
              icon={<DiSqllite className="size-3" />}
              href="https://sqlite.org/"
              title="SQLite"
            />
            <ToolBox
              color="blue"
              icon={<RiTailwindCssFill className="size-3" />}
              href="https://tailwindcss.com/"
              title="Tailwindcss"
            />
          </ProjectMetaData>
          <ProjectMetaData title="Website">Not-hosted for now.</ProjectMetaData>
          <ProjectMetaData title="Source Code">
            <Link
              href={"https://github.com/aliaitrhou/youtube-transcriber"}
              target="_blank"
              className="hover:underline underline-offset-1 text-yellow-500 dark:text-emerald-400"
            >
              https://github.com/aliaitrhou/note_book
            </Link>
          </ProjectMetaData>
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default NoteBook;
