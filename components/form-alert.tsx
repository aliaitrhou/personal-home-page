import React from "react";
import { TbAlertTriangle } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";

type status = {
  message: string;
  type: "error" | "success";
};

const FormAlert = ({ message, type }: status) => {
  const err = type === "error";

  return (
    <div
      className={`w-full mx-auto rounded-md py-2 px-4 sm:px-6 flex flex-row items-center gap-3 ${err ? "border-2 border-red-500 bg-red-400/30 text-red-500" : "border-2 border-green-500 bg-green-500/30 text-green-500"} text-xs xs:text-sm sm:text-md font-bold`}
    >
      {err ? (
        <TbAlertTriangle className="size-6" />
      ) : (
        <FaRegCircleCheck className="size-6" />
      )}
      <p>{message}</p>
    </div>
  );
};

export default FormAlert;
