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
import { saira } from "@/app/fonts";

const ShellAgent = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox
          title="Description"
          styles={`${saira.className} font-light leading-7`}
        >
          <p className="text-justify indent-6">
            A tool to transcribe any YouTube video into your language of choice.
            I built it while trying the nextjs app router, and openai python
            library.
          </p>
          <Image
            alt="youtube transcriber overview"
            src={yt_transcriber}
            className="my-4 border border-gray-300"
          />
          <p>
            The UI was originally developed with Stitches, a CSS-in-JS library,
            but Stitches is no longer actively maintained, I rewrote the
            interface using Chakra UI, which is built on a more stable and
            flexible styling system.
          </p>
          <Image
            alt="youtube transcriber demo"
            src={demo}
            className="my-4 rounded-sm"
          />
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default ShellAgent;
