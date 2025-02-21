import React from "react";
import ContentBox from "@/components/content-box";
import EmailButton from "@/components/email-button";
import MediaBox from "@/components/media-box";
import SectionWrapper from "@/components/section-wrapper";
import TimeLine from "@/components/time-line";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full px-3 sm:px-6 md:px-10 mx-auto py-4 space-y-6 sm:space-y-8">
      <SectionWrapper delay={0}>
        <ContentBox title="Who is Ali">
          <p className="text-justify indent-8 font-light text-lg xs:text-xl text-zinc-700 dark:text-zinc-300">
            Hey! I&apos;m Ali. Not sure how to intro myself, but I&apos;m a CS
            student and aspiring software developer based in Morocco. Driven by
            the desire to create stuff that meets my needs and ambitions, I love
            everything related to product creation from identifying problems to
            designing and building&nbsp;
            <Link
              href={"/projects"}
              className="text-blue-500 dark:text-teal-500 hover:underline underline-offset-2 decoration-blue-500 dark:decoration-teal-500"
            >
              Projects
            </Link>{" "}
            that not only makes me happy but also motivates me to push forward
            and tackle the next challenge. I spend countless hours refining my
            craft, optimizing workflows and pushing my limits, So i plan to code
            until AI rips software from my speedy Vim fingers.
          </p>
        </ContentBox>
      </SectionWrapper>
      <SectionWrapper delay={0.3}>
        <ContentBox title="Changelog">
          <TimeLine timeRange="2022"> Bacaloria degree, Casablanca.</TimeLine>
          <TimeLine timeRange="2023 - current">
            Pursuing Licence (Bachelor) degree in software engineering at
            Abdelmalek Essaadi University, Tetouan.
          </TimeLine>
          <TimeLine timeRange="2023 - 2024">
            Worked as a{" "}
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
            with the InfoMath team, which is the Computer Science club at the
            university.
          </TimeLine>
          <TimeLine timeRange="2024 - current">
            Head of organizing council at InfoMath club.
          </TimeLine>
        </ContentBox>
      </SectionWrapper>
      <SectionWrapper delay={0.6}>
        <ContentBox title="Me Online">
          <div className="flex flex-col flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-3 md:gap-4 font-bold">
            <MediaBox platform="Github" url="https://github.com/aliaitrhou">
              <p>aliaitrhou</p>
            </MediaBox>
            <MediaBox platform="X/twitter" url="https://x.com/Ali_AitRahou">
              <p>Ali_AitRahou</p>
            </MediaBox>
            <MediaBox
              platform="Linkedin"
              url="https://www.linkedin.com/in/ali-aitrahou"
            >
              <p>ali-aitrahou</p>
            </MediaBox>
          </div>
        </ContentBox>
        <EmailButton />
      </SectionWrapper>
    </div>
  );
};

export default Home;
