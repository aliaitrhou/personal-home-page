import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 mx-auto pt-4 flex items-center justify-center">
      <div className="text-center">
        <Link
          href="/"
          className="bg-orange-400/50 text-orange-400 hover:bg-orange-400/30 dark:bg-NeonLime-400/45 dark:text-NeonLime-500 dark:hover:bg-NeonLime-400/40 border-2 border-orange-400 dark:border-NeonLime-600 text-center text-sm sm:text-md font-bold rounded-xl sm:px-6 lg:px-8 lg:py-2 mx-auto focus:outline-none"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
