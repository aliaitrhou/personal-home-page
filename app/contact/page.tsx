"use client";

import React, { useCallback, useState } from "react";
import Form from "@/components/form";
import FormAlert from "@/components/form-alert";

const Contact = () => {
  const [status, setStatus] = useState({
    message: "",
    error: false,
  });

  const getStatus = useCallback((message: string, error: boolean) => {
    setStatus({
      message,
      error,
    });
  }, []);

  {
    /* <div className="w-full px-0 sm:px-2 md:px-10 py-10 border border-yellow-500 border-dashed"> */
  }
  {
    /* </div> */
  }
  return (
    <section className="mx-auto flex flex-col items-center justify-center space-y-4 sm:space-y-6 px-2 sm:px-2 md:px-4 xl:px-6 py-10 sm:py-12">
      {status.message && (
        <FormAlert
          message={status.message}
          type={status.error ? "error" : "success"}
        />
      )}
      <Form getStatus={getStatus} />
    </section>
  );
};

export default Contact;
