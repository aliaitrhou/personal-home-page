import BlurTextChunk from "@/components/blur-text-chunk";
import ContentBox from "@/components/content-box";
import MediaBox from "@/components/media-box";
import SectionWrapper from "@/components/section-wrapper";
import TimeLine from "@/components/time-line";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full px-6 sm:px-8 md:px-10 mx-auto border-dashed">
      <SectionWrapper>
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
              text=" for building services/stuff i want. "
            />
          </BlurTextChunk>
          I thrive on{" "}
          <BlurTextChunk
            toggleLabel="exploring"
            text=" all aspects of creating products, from brainstorming and designing to 
        bringing ideas to life. "
          ></BlurTextChunk>
          I’m enjoying the process of{" "}
          <BlurTextChunk
            toggleLabel="learning"
            text=", experimenting, and creating things that feel meaningful "
          />
          and i have a{" "}
          <BlurTextChunk
            toggleLabel="plan"
            text=" to code until AI rips software from my speedy Vim fingers."
          />
        </p>
      </SectionWrapper>
      <SectionWrapper>
        <ContentBox title="My Changelog:">
          <TimeLine timeRange="2022"> Bacaloria degree, Casablanca.</TimeLine>
          <TimeLine timeRange="2023 - current">
            Pursuing Licence (Bachelor) degree in software engineering at
            Abdelmalek Essaadi University, Tetouan.
          </TimeLine>
          <TimeLine timeRange="2023 - 2024">
            Worked with InfoMath club team (
            <Link href="/certificates">Design office</Link>).
          </TimeLine>
          <TimeLine timeRange="2024 - current">
            Head of organizing council at InfoMath club.
          </TimeLine>
        </ContentBox>
      </SectionWrapper>
    </div>
  );
};

export default Home;
