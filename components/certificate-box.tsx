import React from "react";
import Image, { StaticImageData } from "next/image";

interface certificateProps {
  alt: string;
  path: StaticImageData;
}

const CertificateBox: React.FC<certificateProps> = ({ alt, path }) => {
  return (
    <Image
      src={path}
      alt={alt}
      className="object-fill aspect-[14/8] rounded-lg border border-zinc-500 dark:border-zinc-300 shadow-xl"
    />
  );
};

export default CertificateBox;
