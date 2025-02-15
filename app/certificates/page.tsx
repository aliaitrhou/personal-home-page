"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import CertificateBox from "@/components/certificate-box";
import { certs } from "@/certificatesData";

const Certificates = () => {
  const params = useSearchParams();

  const certToOpen = params.get("cert");

  return (
    <div className="w-full px-4 sm:px-6  mx-auto py-12">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-10 md:gap-x-24 sm:gap-y-6 md:gap-y-16 px-0 xs:px-2 sm:px-6">
        {certs.map((cert, index) => (
          <CertificateBox
            key={index}
            title={cert.title}
            desc={cert.desc}
            alt={cert.alt}
            path={cert.src}
            delay={index * 0.2}
            openCert={cert.id === certToOpen ? true : false}
          />
        ))}
      </section>
    </div>
  );
};

export default Certificates;
