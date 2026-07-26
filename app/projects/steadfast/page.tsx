import ContentBox from "@/components/content-box";
import Link from "next/link";
import ProjectMetaData, { ToolBox } from "@/components/project-meta-data";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import homePage from "@/public/imgs/projects/steadfast_haven/home.png";
import workPage from "@/public/imgs/projects/steadfast_haven/work.png";
import { FaKey } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { saira } from "@/app/fonts";

const SteadFastHaven = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox
          title="Description"
          styles={`${saira.className} font-light leading-7`}
        >
          <p className="text-justify indent-6">
            Built the official website for <strong>Steadfast Haven</strong>, a
            U.S.-based nonprofit organization, in collaboration with a teammate.
            The organization is dedicated to empowering underserved youth in
            Memphis through documentary storytelling, creative arts, mentorship,
            and community engagement. The website serves as its primary digital
            presence, allowing visitors to learn about the organization&apos;s
            mission, programs, events, and ways to support its work through
            donations and community involvement.
          </p>

          <Image
            alt="Steadfast Haven homepage"
            src={homePage}
            className="rounded-md my-4 border border-neutral-500/20"
          />

          <p className="text-justify">
            I contributed to both the frontend and backend development, building
            responsive interfaces with Tailwind CSS, developing REST APIs using
            Express.js, managing application data with PostgreSQL, and
            implementing secure authentication using JWT. Throughout the
            project, we focused on delivering a clean, accessible, and
            performant experience that makes it easy for visitors to explore the
            organization&apos;s initiatives and connect with its mission.
          </p>

          <p className="text-justify">
            Working closely as a team, we translated the organization&apos;s
            vision into a modern web application that is both informative and
            easy to maintain, providing a solid foundation for future growth and
            continued community outreach.
          </p>
          <Image
            alt="Steadfast Haven programs page"
            src={workPage}
            className="rounded-md my-4 border border-neutral-500/20"
          />
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default SteadFastHaven;
