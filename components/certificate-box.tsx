"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";
import { createPortal } from "react-dom";
import AnimationBox from "./animation-box";
import { crimson, lexend, saira } from "@/app/fonts";

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
        className="
    group
    flex
    flex-col
    md:flex-row
    gap-4
    w-full
    border
    border-neutral-200
    dark:border-neutral-700
    bg-white/60
    dark:bg-zinc-800
    backdrop-blur-xl
    p-2
    transition-all
    duration-300
    hover:border-orange-600/40
    dark:hover:border-NeonLime-600/40
    hover:-translate-y-0.5
  "
      >
        {/* Image */}
        <button
          onClick={() => {
            setExpand(true);
            removeQueryParams();
          }}
          className="
      relative
      overflow-hidden
      rounded-sm
      shrink-0
      md:w-[230px]
      w-full
      aspect-[16/10]
      border
      border-neutral-300
      dark:border-neutral-700
      cursor-pointer
    "
        >
          <Image
            src={path}
            alt={alt}
            fill
            className="
        object-fill
        transition-transform
        duration-500
        group-hover:scale-105
      "
          />
        </button>

        {/* Content */}
        <div className="flex-1 pr-1">
          <div
            className={`flex items-center justify-between ${crimson.className}`}
          >
            <h3
              className={`text-xl font-semibold text-neutral-900 dark:text-white `}
            >
              {title}
            </h3>

            <span
              className="
          shrink-0
          rounded-md
          text-xs
          font-medium
          text-neutral-500
          dark:text-neutral-300
        "
            >
              {date}
            </span>
          </div>

          <p
            className={`block mt-4 text-[15px] leading-7 text-neutral-600 dark:text-neutral-400 ${saira.className}`}
          >
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
