import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { lexend, saira } from "@/app/fonts";

interface Props {
  imagePath: StaticImageData;
  title: string;
  timeSpan: string;
  children: React.ReactNode;
  isLast?: boolean;
}

const TimeLineContainer: React.FC<Props> = ({
  imagePath,
  timeSpan,
  children,
  title,
  isLast = false,
}) => {
  return (
    <div className="w-full">
      {/* Header with logo and title */}
      <div className={`flex items-start gap-4 ${lexend.className} font-light`}>
        <div className="relative w-12 h-12 flex-shrink-0">
          <Image
            src={imagePath}
            className="rounded-full bg-white object-contain p-0.5"
            alt={title}
            fill
            sizes="64px"
          />
        </div>
        <div className="flex-1 -space-y-0.5 pt-1">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {timeSpan}
          </p>
          <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-200">
            {title}
          </h3>
        </div>
      </div>

      <div
        className={`${!isLast && "pb-3"} border-l border-neutral-500/40 ml-6 my-2`}
      >
        <div className="pl-10 flex-1 pb-6">
          <div
            className={`${saira.className} font-light text-gray-700 dark:text-neutral-400`}
          >
            {children}
          </div>
        </div>

        {!isLast && (
          <div className="border-b border-dashed border-neutral-500/40 w-full"></div>
        )}
      </div>
    </div>
  );
};

export default TimeLineContainer;
