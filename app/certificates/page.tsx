"use client";

import { useSearchParams } from "next/navigation";
import CertificateBox from "@/components/certificate-box";
import fcc from "@/public/imgs/certificates/web-design.png";
import infomath from "@/public/imgs/certificates/infomath.png";
import ai from "@/public/imgs/certificates/ai-path.png";
import advancedReact from "@/public/imgs/certificates/react.png";
import fs from "@/public/imgs/certificates/fs.png";
import ml from "@/public/imgs/certificates/ml.png";
import AnimationBox from "@/components/animation-box";
import ContentBox from "@/components/content-box";
import { TiGroup } from "react-icons/ti";
import { FaLaptopCode } from "react-icons/fa";

const Certificates = () => {
  const params = useSearchParams();

  const certToOpen = params.get("cert");

  return (
    <section className="py-3 sm:py-2 md:py-0 space-y-4 sm:space-y-6 md:space-y-8">
      <ContentBox
        title="Software Engineering"
        styles="sm:py-4"
        icon={
          <FaLaptopCode className="text-orange-400 dark:text-NeonLime-500" />
        }
      >
        <AnimationBox delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6 items-stretch">
            <CertificateBox
              title="AI Developer"
              alt="ai dev certeficate"
              path={ai}
              delay={0.2}
              date="2024"
            >
              Certificate in AI Development, building applications powered by AI
              technologies.
            </CertificateBox>
            <CertificateBox
              title="Web Design"
              alt="web design certeficate"
              path={fcc}
              delay={0.3}
              date="2023"
            >
              Certificate in Web Design from FCC, covering front-end web
              development and responsive design.
            </CertificateBox>

            <CertificateBox
              title="Advanced React"
              alt="advanced react certeficate"
              path={advancedReact}
              delay={0.5}
              date="2024"
            >
              React certification focused on making faster apps with performance
              optimization techniques.
            </CertificateBox>

            <CertificateBox
              title="ML Workshop"
              alt="ML workshop certeficate"
              path={ml}
              delay={0.4}
              date="2023"
            >
              Completed a Machine Learning workshop on supervised learning and
              neural networks.
            </CertificateBox>
          </div>
        </AnimationBox>
      </ContentBox>

      <ContentBox
        title="Teamwork & Mentorship"
        styles="sm:py-4"
        icon={
          <TiGroup className="text-orange-400 dark:text-NeonLime-500 size-4" />
        }
      >
        <AnimationBox delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6 items-stretch">
            <CertificateBox
              title="Design Officer"
              alt="design officer certeficate"
              path={infomath}
              delay={0.1}
              openCert={certToOpen === "infomath"}
              date="2024"
            >
              Certified Design Officer by Infomath for a year of helping the
              team gain an audience.
            </CertificateBox>

            <CertificateBox
              title="Mentorship"
              alt="certificate of participation"
              path={fs}
              delay={0.6}
              date="2023"
            >
              Mentoring and assisting in student registration at the Faculty of
              Sciences, Tétouan, for one month.
            </CertificateBox>
          </div>
        </AnimationBox>
      </ContentBox>
    </section>
  );
};

export default Certificates;
