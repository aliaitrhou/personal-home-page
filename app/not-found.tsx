import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-[60dvh] px-4 sm:px-6 md:px-10 mx-auto pt-4 flex items-center justify-center">
      <div className="text-center">
        <p className="text-3xl font-bold mb-4">404 - Page Not Found</p>

        <Link
          href="/"
          className="bg-orange-400/45 text-orange-500 hover:bg-orange-400/40 dark:bg-NeonLime-400/45 dark:text-NeonLime-500 dark:hover:bg-NeonLime-400/40 border-2 border-orange-500 dark:border-NeonLime-600 text-center w-24 sm:w-28 h-9 sm:h-10 text-sm sm:text-md font-bold  rounded-md sm:px-6  mx-auto focus:outline-none"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
