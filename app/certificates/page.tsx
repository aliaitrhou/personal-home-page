import React from "react";
import webDesign from "@/public/certificates/web-design.png";
import infomath from "@/public/certificates/infomath.png";
import ai from "@/public/certificates/ai-path.png";
import CertificateBox from "@/components/certificate-box";

const Certificates = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 mx-auto pt-4">
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-8 space-y-8 sm:space-y-10 md:space-y-12 px-0 sm:px-4 md:px-8">
        <CertificateBox alt="web design certificate" path={infomath} />
        <CertificateBox alt="ai dev certificate" path={ai} />
        <CertificateBox alt="design officer certificate" path={webDesign} />
      </section>
    </div>
  );
};

export default Certificates;
