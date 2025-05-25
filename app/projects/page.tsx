import React from "react";
import ProjectBox from "@/components/project-box";
import shell_agent_thumnail from "@/public/imgs/projects/shell_agent/shell_agent_thumnail.png";
import jarvis_thumnail from "@/public/imgs/projects/jarvis_ai/jarvis-android-ios.png";
import youtube_trascriber_thumnail from "@/public/imgs/projects/yt_transcriber/yt_tanscriber_thumnail.png";
import AnimationBox from "@/components/animation-box";
import ContentBox from "@/components/content-box";

const Projects = () => {
  return (
    <section className="py-3 sm:py-2 md:py-0 space-y-4 sm:space-y-6 md:space-y-8">
      <ContentBox title="Open Source" styles="px-2 sm:px-3 sm:py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 md:gap-14">
          <AnimationBox delay={0.1}>
            <ProjectBox
              href="/projects/shell-agent"
              thumnail={shell_agent_thumnail}
              projectName="Shell Agent"
              date="2025"
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
            >
              An Ai 🤖 tool to transcript and translate youtube videos to any
              language.
            </ProjectBox>
          </AnimationBox>
        </div>
        <div className=" text-orange-400 dark:text-NeonLime-400/80">
          More project are preparing for reference...
        </div>
      </ContentBox>
      {/* TODO: add colaboration */}
      {/* <ContentBox title="Colaborations" styles="px-3 sm:px-5 sm:py-4"> */}
      {/*   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 md:gap-14"> */}
      {/*        ....*/}
      {/*   </div> */}
      {/* </ContentBox> */}
    </section>
  );
};

export default Projects;
