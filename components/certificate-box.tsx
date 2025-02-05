"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";
import CertificateWrapper from "./certificate-wrapper";
import { createPortal } from "react-dom";

interface CertificateProps {
  alt: string;
  path: StaticImageData;
  position: string;
  isLeftItem: boolean;
  openCert: boolean;
  delay: number;
}

const CertificateBox: React.FC<CertificateProps> = ({
  alt,
  path,
  position,
  isLeftItem,
  delay,
  openCert = false,
}) => {
  const [expand, setExpand] = useState(openCert || false);
  const searchParams = useSearchParams();

  // i used this function to remove the cert query param from the url
  // cause it keeps the infomath certification open
  const removeQueryParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("cert");
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  return (
    <>
      <div className={`flex justify-center ${position}`}>
        <CertificateWrapper
          delay={delay}
          className="relative max-w-full sm:max-w-[55%] rounded-lg overflow-hidden"
        >
          <Image
            src={path}
            alt={alt}
            className={`object-fill w-full aspect-[14/8] inner-custom rounded-lg sm:cursor-pointer border-2 ${openCert ? "border-blue-500 dark:border-teal-500" : ""} hover:border-orange-500 dark:hover:border-NeonLime-600`}
            onClick={() => {
              setExpand(true);
              removeQueryParams();
            }}
          />
        </CertificateWrapper>
      </div>

      {expand &&
        createPortal(
          <div
            className="hidden fixed inset-0 sm:flex bg-black bg-opacity-60 items-center justify-center z-50"
            onClick={() => setExpand(false)}
          >
            <Image
              src={path}
              alt={alt}
              className="max-w-[80%] max-h-[85%] md:max-w-[60%] md:max-h-[65%] rounded-xl shadow-2xl  border-2 border-orange-500 dark:border-NeonLime-600"
            />
          </div>,
          document.body,
        )}
    </>
  );
};

export default CertificateBox;
