"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";
import { createPortal } from "react-dom";
import AnimationBox from "./animation-box";

interface CertificateProps {
  title: string;
  children: React.ReactNode;
  alt: string;
  path: StaticImageData;
  openCert?: boolean;
  date: string;
  delay: number;
}

const CertificateBox: React.FC<CertificateProps> = ({
  title,
  children,
  alt,
  path,
  date,
  delay,
  openCert = false,
}) => {
  const [expand, setExpand] = useState(openCert);
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();

  // function to remove the cert query param from the url
  // cause it keeps the infomath certification open
  const removeQueryParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("cert");
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <AnimationBox
        delay={delay}
        className="relative w-full overflow-hidden p-3 space-y-2 border border-neutral-300 dark:border-neutral-700 rounded-xl bg-yellow-100/30 dark:bg-zinc-700/30 backdrop-blur-md"
      >
        <Image
          src={path}
          alt={alt}
          className={`object-fill rounded-xl w-full aspect-[14/8] sm:cursor-pointer border border-neutral-300 dark:border-neutral-700 ${openCert ? "border-2 border-orange-400 dark:border-NeonLime-600" : ""}`}
          onClick={() => {
            setExpand(true);
            removeQueryParams();
          }}
        />
        <div className="text-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-md sm:text-lg text-zinc-600  dark:text-zinc-300 font-bold">
              {title}
            </h3>
            <span className="rounded-sm bg-amber-300/60 text-zinc-500 dark:bg-zinc-400/30 dark:text-zinc-300 px-2 text-xs">
              {date}
            </span>
          </div>
          <p className="text-sm text-zinc-500 font-normal text-center">
            {children}
          </p>
        </div>
      </AnimationBox>

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
              className="w-[85%] md:w-[75%] xl:w-[60%] h-[40%] md:max-h-[65%] lg:h-[60%] shadow-2xl  border-2 border-black dark:border-white"
            />
          </div>,
          document.body,
        )}
    </>
  );
};

export default CertificateBox;
