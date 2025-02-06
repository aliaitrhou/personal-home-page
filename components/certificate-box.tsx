"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";
import CertificateWrapper from "./certificate-wrapper";
import { createPortal } from "react-dom";

interface CertificateProps {
  title: string;
  desc: string;
  alt: string;
  path: StaticImageData;
  position: string;
  openCert: boolean;
  delay: number;
}

const CertificateBox: React.FC<CertificateProps> = ({
  title,
  desc,
  alt,
  path,
  position,
  delay,
  openCert = false,
}) => {
  const [expand, setExpand] = useState(openCert || false);
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();

  // i used this function to remove the cert query param from the url
  // cause it keeps the infomath certification open
  const removeQueryParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("cert");
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  useEffect(() => {
    setIsClient(true);
  });
  return (
    <>
      <div className={`flex justify-center ${position}`}>
        <CertificateWrapper
          delay={delay}
          className="relative max-w-full sm:max-w-[50%] rounded-lg overflow-hidden space-y-2"
        >
          <Image
            src={path}
            alt={alt}
            className={`object-fill w-full aspect-[14/8] inner-custom rounded-md sm:cursor-pointer ${openCert ? "border-2 border-orange-500 dark:border-NeonLime-600" : ""} sm:border-2 sm:border-slate-300 sm:dark:border-zinc-700`}
            onClick={() => {
              setExpand(true);
              removeQueryParams();
            }}
          />
          <div className="text-center">
            <h3 className="text-xl text-zinc-600  dark:text-zinc-300 font-bold">
              {title}
            </h3>
            <p className="text-md text-zinc-500 font-normal">{desc}</p>
          </div>
        </CertificateWrapper>
      </div>

      {expand &&
        isClient &&
        createPortal(
          <div
            className="hidden fixed inset-0 sm:flex bg-black bg-opacity-60 items-center justify-center z-50"
            onClick={() => setExpand(false)}
          >
            <Image
              src={path}
              alt={alt}
              className="max-w-[80%] max-h-[85%] md:max-w-[60%] md:max-h-[65%] rounded-xl shadow-2xl  border-2 border-black dark:border-white"
            />
          </div>,
          document.body,
        )}
    </>
  );
};

export default CertificateBox;
