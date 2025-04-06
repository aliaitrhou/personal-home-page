"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import CertificateBox from "@/components/certificate-box";
import fcc from "@/public/certificates/web-design.png";
import infomath from "@/public/certificates/infomath.png";
import ai from "@/public/certificates/ai-path.png";
import advancedReact from "@/public/certificates/react.png";
import fs from "@/public/certificates/fs.png";
import ml from "@/public/certificates/ml.png";

const Certificates = () => {
  const params = useSearchParams();

  const certToOpen = params.get("cert");

  {
    /* <div className="w-full px-4 sm:px-6  mx-auto py-12 border"> */
  }
  {
    /* </div> */
  }
  return (
    <section className="px-0 sm:px-4 md:px-14 py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-10 md:gap-x-24 sm:gap-y-6 md:gap-y-16">
      <CertificateBox
        title="Design Officer"
        alt="design officer certeficate"
        path={infomath}
        delay={0.1}
        openCert={certToOpen === "infomath"}
      >
        Certified Design Officer by Infomath for a year of helping the team gain
        an audience.
      </CertificateBox>
      <CertificateBox
        title="AI Developer"
        alt="ai dev certeficate"
        path={ai}
        delay={0.2}
      >
        Certificate in AI Development, building applications powered by AI
        technologies.
      </CertificateBox>
      <CertificateBox
        title="Web Design"
        alt="web design certeficate"
        path={fcc}
        delay={0.3}
      >
        Certificate in Web Design from FCC, covering front-end web development
        and responsive design.
      </CertificateBox>
      <CertificateBox
        title="ML Workshop"
        alt="ML workshop certeficate"
        path={ml}
        delay={0.4}
      >
        Completed a Machine Learning workshop on supervised learning and neural
        networks.
      </CertificateBox>
      <CertificateBox
        title="Advanced React"
        alt="advanced react certeficate"
        path={advancedReact}
        delay={0.5}
      >
        React certification focused on making faster apps with performance
        optimization techniques.
      </CertificateBox>

      <CertificateBox
        title="Participation Certificate"
        alt="certificate of participation"
        path={fs}
        delay={0.6}
      >
        Mentoring and assisting in student registration at the Faculty of
        Sciences, Tétouan, for one month.
      </CertificateBox>
    </section>
  );
};

export default Certificates;
