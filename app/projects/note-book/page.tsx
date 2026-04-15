import ContentBox from "@/components/content-box";
import Link from "next/link";
import ProjectMetaData, { ToolBox } from "@/components/project-meta-data";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import preivew from "@/public/imgs/projects/note_book/preview.png";
// import preview2 from "@/public/imgs/projects/note-book/preview2.png";
import exami_create_exam from "@/public/imgs/projects/exami/exami_create_exam.png";
import { FaKey } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { saira } from "@/app/fonts";

const NoteBook = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox
          title="Description"
          styles={`${saira.className} font-light leading-7`}
        >
          <p className="text-justify indent-6">test....</p>
          <Image
            alt="exami thumnail"
            src={preivew}
            className="rounded-md w-full"
          />
          <p>content....</p>
        </ContentBox>
      </AnimationBox>
      <AnimationBox delay={0.2}>
        <ContentBox title="Project Info">
          <ProjectMetaData title="Platform">Web.</ProjectMetaData>
          <ProjectMetaData
            title="Tech Stack"
            styles="flex flex-wrap items-center gap-2 mt-1 sm:mt-0"
          >
            <ToolBox
              color="yellow"
              icon={<RiJavascriptFill className="size-4" />}
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              title="javascript,"
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
              title="Postgresql,"
            />
            <ToolBox
              color="orange"
              icon={<FaKey className="size-3" />}
              href="https://jwt.io/"
              title="JWT."
            />
          </ProjectMetaData>
          <ProjectMetaData title="Deployment">Not Deployed.</ProjectMetaData>
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
