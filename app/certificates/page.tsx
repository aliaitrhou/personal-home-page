"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import CertificateBox from "@/components/certificate-box";
import { certs } from "@/certificatesData";

const Certificates = () => {
  const params = useSearchParams();

  const certToOpen = params.get("cert");

  return (
    <div className="w-full px-4 sm:px-6  mx-auto pt-4 pb-8">
      <section className="flex flex-col gap-8 sm:gap-4">
        {certs.map((cert, index) => (
          <CertificateBox
            key={index}
            title={cert.title}
            desc={cert.desc}
            position={index % 2 == 0 ? "sm:justify-start" : "sm:justify-end"}
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
