"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";

interface CertificateProps {
  alt: string;
  path: StaticImageData;
  position: string;
  openCert: boolean;
}

const CertificateBox: React.FC<CertificateProps> = ({
  alt,
  path,
  position,
  openCert = false,
}) => {
  const [expand, setExpand] = useState(openCert || false);
  const searchParams = useSearchParams();

  // i used this function to remove the cert query param from the url
  // cause it keeps the infomath certification open
  const removeQueryParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.forEach((_, key) => {
      params.delete(key);
    });
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };
  return (
    <>
      <div className={`flex justify-center ${position}`}>
        <div className="relative max-w-full sm:max-w-[55%] rounded-lg overflow-hidden">
          <Image
            src={path}
            alt={alt}
            className="object-fill w-full aspect-[14/8] inner-custom rounded-lg sm:cursor-pointer border-2 hover:border-orange-500 dark:hover:border-NeonLime-600"
            onClick={() => {
              setExpand(true);
              removeQueryParams();
            }}
          />
        </div>
      </div>

      {expand && (
        <div
          className="hidden fixed inset-0 bg-black bg-opacity-80 sm:flex items-center justify-center z-50"
          onClick={() => setExpand(false)}
        >
          <Image
            src={path}
            alt={alt}
            className="max-w-[80%] max-h-[85%] md:max-w-[60%] md:max-h-[65%] rounded-xl"
          />
        </div>
      )}
    </>
  );
};

export default CertificateBox;
