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
    <div className="w-full border-r border-neutral-500/30">
      <div className={`flex items-center gap-4 ${lexend.className} font-light`}>
        <div className="relative w-10 h-10 flex-shrink-0">
          <Image
            src={imagePath}
            className="opacity-[0.9] rounded-e-lg bg-white object-cover p-0.5 border border-neutral-400 dark:border-neutral-700"
            alt={title}
            fill
            sizes="64px"
          />
        </div>
        <div className="flex-1 -space-y-1">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {timeSpan}
          </p>
          <h3 className="font-semibold text-md md:text-lg text-gray-900 dark:text-gray-200">
            {title}
          </h3>
        </div>
      </div>

      <div
        className={`${!isLast && "pb-3"} border-l border-neutral-500/40 my-1`}
      >
        <div className="pl-8 flex-1 pb-6 pr-2">
          <div
            className={`${saira.className} font-light text-sm text-neutral-700 dark:text-neutral-400`}
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
