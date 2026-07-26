import ContentBox from "@/components/content-box";
import Link from "next/link";
import ProjectMetaData, { ToolBox } from "@/components/project-meta-data";
import AnimationBox from "@/components/animation-box";
import Image from "next/image";
import exami from "@/public/imgs/projects/exami/exami.png";
import exami_teacher from "@/public/imgs/projects/exami/exami_teacher.png";
import exami_create_exam from "@/public/imgs/projects/exami/exami_create_exam.png";
import { FaKey } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { saira } from "@/app/fonts";

const Exami = () => {
  return (
    <div className="space-y-3">
      <AnimationBox delay={0}>
        <ContentBox
          title="Description"
          styles={`${saira.className} font-light leading-7`}
        >
          <p className="text-justify indent-6">
            Collaborated with two teammates to design, build, scale, and secure
            an online examination platform using only vanilla JavaScript, as
            part of our university JavaScript class.
            <Image
              alt="exami thumnail"
              src={exami}
              className="rounded-md my-4"
            />
          </p>
          <p>
            In the end, we built a working system where teachers could create as
            many exams as needed and share them directly with students to take
            online.
          </p>
          <Image
            alt="exami teacher dashboard"
            src={exami_teacher}
            className="rounded-md my-4"
          />
          <Image
            alt="exami create exam"
            src={exami_create_exam}
            className="rounded-md mb-6"
          />
        </ContentBox>
      </AnimationBox>
    </div>
  );
};

export default Exami;
