import ContentBox from "@/components/content-box";
import EmailButton from "@/components/email-button";
import MediaBox from "@/components/media-box";
import SectionWrapper from "@/components/section-wrapper";
import hightSchool from "@/public/imgs/changelog/highschool.png";
import infoMath from "@/public/imgs/changelog/infomath.png";
import fs from "@/public/imgs/changelog/fs.png";
import webmonk from "@/public/imgs/changelog/webmonk.jpg";
import { FaStarOfLife } from "react-icons/fa6";
import { LuGitPullRequest } from "react-icons/lu";
import { MdOutlineOnlinePrediction } from "react-icons/md";

import Link from "next/link";
import TimeLineContainer from "@/components/time-line-container";
import { saira } from "./fonts";

const Home = () => {
  return (
    <div className="w-full mx-auto space-y-6 sm:space-y-8 mt-4">
      <SectionWrapper delay={0}>
        <ContentBox title="About Me" icon={<FaStarOfLife className="text-orange-400 dark:text-NeonLime-500" />}>
          <p
            className={`text-justify indent-8 font-light text-sm xs:text-lg text-zinc-700 dark:text-zinc-300 ${saira.className} font-light tracking-tight`}
          >
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
            craft, perfecting my workflow, and pushing my limits. And I plan to
            code until AI rips software from my speedy Vim fingers.
          </p>
        </ContentBox>
      </SectionWrapper>
      <SectionWrapper delay={0.3}>
        <ContentBox title="Changelog" icon={<LuGitPullRequest className="text-orange-400 dark:text-NeonLime-500 size-4" />}>
          <TimeLineContainer
            imagePath={hightSchool}
            title="Bacaloria degree - Casablanca."
            timeSpan="October 2019 - July 2022"
          >
            <ul>
              <li>- Baccalaureat of Science in Physical Science</li>
              <li>
                - Relevant courses: Mathematics, Physics, Chemistry, Philosophy,
                Languages.
              </li>
            </ul>
          </TimeLineContainer>

          <TimeLineContainer
            imagePath={fs}
            title="Abdelmalek Essaˆadi University - Tetouan"
            timeSpan="September 2022 - Present"
          >
            <ul className="space-y-2">
              <li>- Pursuing Licence (Bachelor) degree in software engineering.</li>
              <li>- Relevant courses: Adv Operating Systems, Web technologies, Databases, Data structures, languages,
                    Functional programming, soft skills.</li>
            </ul>
          </TimeLineContainer>
          <TimeLineContainer
            imagePath={infoMath}
            title="InfoMath Club - Head of organizing council"
            timeSpan="October 2023 - July 2025"
          >
            <ul className="space-y-2">
              <li>- Led the InfoMath Club design office and delivered computer science workshops and academic events.</li>
              <li>- Simplified complex CS concepts to make them accessible to the university community.</li>
              <li>- Collaborated with PhD, Master’s, and undergraduate students in a high-performing academic team.</li>
              <li>- Led the Organizing Council, organizing conferences and guiding students through CS topics and career pathways.</li>
            </ul>
          </TimeLineContainer>
          <TimeLineContainer
            imagePath={webmonk}
            title="WebMonk SARLAU - Full Stack Developer"
            timeSpan="October 2025 - Fabuary 2026" 
            isLast={true}
          >
            <ul className="space-y-2">
              <li>- Contributed to real-world web solutions at WebMonk for international clients.</li>
              <li>- Integrated third-party services using APIs and webhooks for our event-driven workflows.</li>
            </ul>
          </TimeLineContainer>
        </ContentBox>
      </SectionWrapper>
      <SectionWrapper delay={0.6}>
        <ContentBox title="Me Online" icon={<MdOutlineOnlinePrediction className="text-orange-400 dark:text-NeonLime-500 size-5"/>}>
          <p className={`${saira.className} mb-3`}>
            Feel free to contact me at{" "}
            <a
              href="mailto:alirhou7@gmail.com"
              className="text-blue-500 dark:text-teal-500 hover:underline underline-offset-2 decoration-blue-500 dark:decoration-teal-500"
            >
              alirhou7@gmail.com
            </a>{" "}
            or find me on these platforms:
          </p>
          <div className="flex items-center flex-wrap sm:flex-nowrap justify-start gap-2 sm:gap-3 md:gap-4 font-bold">
            <MediaBox url="https://github.com/aliaitrhou" platform="Github" />
            <MediaBox url="https://x.com/Ali_AitRahou" platform="X/twitter" />
            <MediaBox
              url="https://www.linkedin.com/in/ali-aitrahou"
              platform="Linkedin"
            />
          </div>
        </ContentBox>
        <EmailButton />
      </SectionWrapper>
    </div>
  );
};

export default Home;
