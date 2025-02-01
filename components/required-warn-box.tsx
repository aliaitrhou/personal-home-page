import React from "react";
import { PiArrowBendUpRightDuotone } from "react-icons/pi";

const RequiredBox = ({ error }: { error: string }) => {
  return (
    <div className="flex items-center gap-1 ml-2 -mb-4">
      <PiArrowBendUpRightDuotone className="text-orange-500 dark:text-NeonLime-500 size-5" />
      <div className="text-orange-500 dark:text-NeonLime-500 text-sm mb-1">
        {error}
      </div>
    </div>
  );
};

export default RequiredBox;
