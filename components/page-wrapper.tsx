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
      <div className="relative w-full md:px-10">
        <div className="relative -z-10 w-full h-[300px] sm:h-[350px] -mt-2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/river.mov" type="video/mp4" />
          </video>
          <div className="absolute z-30 -mt-20 inset-0 flex flex-col items-center justify-center text-center px-8">
            <PageTitle title={title} keyword={keyword} />
          </div>
          <div className="absolute z-20 inset-0 bg-gradient-to-r dark:from-zinc-800 dark:via-zinc-800/30 dark:to-zinc-800 dark:to-95% from-amber-50 from-4% via-white/20   to-amber-50 to-98%" />
          <div className="absolute bottom-24 sm:bottom-28 right-6 sm:right-3 z-30 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24  bg-orange-500 dark:bg-NeonLime-600  rounded-full p-[2.5px]">
            <Image
              src={Ali}
              alt="ali"
              className="w-full h-full rounded-full border-[0.1px] border-white/30 dark:border-black/20 brightness-125 dark:brightness-125"
            />
          </div>
        </div>
        <div className="absolute bottom-0  h-24 -z-10 w-full mx-auto bg-gradient-to-b from-amber-50/5 to-amber-50 dark:from-transparent dark:to-zinc-800 "></div>
      </div>

      <div className="z-20 w-full sm:max-w-3xl mx-auto px-2 sm:px-8 md:px-10 pt-4 md:pt-8 -mt-36">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
