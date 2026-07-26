import ContentBox from "@/components/content-box";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import jarvis_1 from "@/public/imgs/projects/jarvis_ai/jarvis_1_nobg.png";
import { saira } from "@/app/fonts";

const JarvisAi = () => {
  return (
    <div className="space-y-6 md:space-y-8 text-sm font-thin">
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
    </div>
  );
};

export default JarvisAi;
