import React from "react";
import Ali from "@/public/imgs/ali.jpg";
import Image from "next/image";
import PageTitle from "./page-title";

interface Props {
  classNames?: string;
  title: string;
  keyword?: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({
  children,
  classNames,
  title,
  keyword = "welcome",
}) => {
  return (
    <div className={classNames}>
      <div className="relative w-full">
        <div className="relative w-full h-[250px] -mt-2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/river.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-8">
            <PageTitle title={title} keyword={keyword} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r dark:from-zinc-800 dark:via-zinc-800/30 dark:to-zinc-800 dark:to-95% from-amber-50 from-3% via-amber-50/30 to-amber-50 to-98%" />
        </div>
      </div>
      <div className="relative w-full rounded-t-sm pt-2 sm:pt-4 border-t-[3px] border-orange-500 dark:border-NeonLime-600">
        <div className="absolute -top-[3rem] xs:-top-[3.5rem] sm:-top-[4rem] right-[10%] z-10 w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28  bg-orange-500 dark:bg-NeonLime-600 border-[3px] border-orange-500 dark:border-NeonLime-600 rounded-full">
          <Image
            src={Ali}
            alt="ali"
            className="w-full h-full rounded-full border-[0.5px] border-white dark:border-black brightness-125 dark:brightness-110"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
