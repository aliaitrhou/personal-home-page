import BlurTextChunk from "@/components/blur-text-chunk";
import ContentBox from "@/components/content-box";
import EmailButton from "@/components/email-button";
import MediaBox from "@/components/media-box";
import SectionWrapper from "@/components/section-wrapper";
import TimeLine from "@/components/time-line";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 mx-auto pt-4">
      <SectionWrapper delay={0}>
        <p className="text-center indent-5 font-Nunito text-lg sm:text-xl md:text-2xl">
          Hey, I&apos;m{" "}
          <BlurTextChunk
            toggleLabel="Ali"
            text=" a computer science student  "
          />
          <BlurTextChunk
            toggleLabel="and"
            text=" aspiring software developer based in Morocco. "
          >
            I have a{" "}
            <BlurTextChunk
              toggleLabel="passion"
              text=" for building services and stuff i need/want, "
            />
          </BlurTextChunk>
          which drives me{" "}
          <BlurTextChunk
            toggleLabel="to"
            text=" explore all aspects of product creation— from brainstorming and designing to 
        bringing ideas to life. "
          ></BlurTextChunk>
          I’m enjoying the process of{" "}
          <BlurTextChunk
            toggleLabel="learning"
            text=" and creating things that feel meaningful "
          />
          and i have a{" "}
          <BlurTextChunk
            toggleLabel="plan"
            text=" to code until AI rips software from my speedy Vim fingers."
          />
        </p>
      </SectionWrapper>
      <SectionWrapper delay={0.3}>
        <ContentBox title="My Changelog:">
          <TimeLine timeRange="2022"> Bacaloria degree, Casablanca.</TimeLine>
          <TimeLine timeRange="2023 - current">
            Pursuing Licence (Bachelor) degree in software engineering at
            Abdelmalek Essaadi University, Tetouan.
          </TimeLine>
          <TimeLine timeRange="2023 - 2024">
            Worked as{" "}
            <Link
              href={{
                pathname: "/certificates",
                query: { cert: "infomath" },
              }}
              className="text-blue-500 dark:text-teal-500 hover:underline underline-offset-2 decoration-blue-500 dark:decoration-teal-500"
            >
              Design officer
            </Link>
            {"  "}
            with InfoMath team which is the computer science club in University.
          </TimeLine>
          <TimeLine timeRange="2024 - current">
            Head of organizing council at InfoMath club.
          </TimeLine>
        </ContentBox>
      </SectionWrapper>
      <SectionWrapper delay={0.6}>
        <ContentBox title="Me Online:">
          <div className="flex flex-col flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-3 md:gap-5 font-bold">
            <MediaBox platform="Github" url="https://github.com/aliaitrhou">
              <p>@aliaitrhou</p>
            </MediaBox>
            <MediaBox platform="X/twitter" url="https://x.com/Ali_AitRahou">
              <p>@Ali_AitRahou</p>
            </MediaBox>
            <MediaBox
              platform="Linkedin"
              url="https://www.linkedin.com/in/ali-aitrahou"
            >
              <p>@ali-aitrahou</p>
            </MediaBox>
          </div>
        </ContentBox>
        <EmailButton />
      </SectionWrapper>
    </div>
  );
};

export default Home;
