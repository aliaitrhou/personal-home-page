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

  return (
    <div className="w-full px-2 sm:px-8 md:px-10 mx-auto pt-4">
      <section className="min-h-[70dvh] mx-auto flex flex-col items-center justify-center space-y-4 sm:space-y-6 w-[300px] xs:w-[400px] sm:w-[500px] md:w-[550px]">
        {status.message && (
          <FormAlert
            message={status.message}
            type={status.error ? "error" : "success"}
          />
        )}
        <h2 className="font-extrabold text-2xl xs:text-3xl sm:text-3xl md:text-4xl text-zinc-500/60 dark:text-zinc-500">
          Connect with Me
        </h2>
        <Form getStatus={getStatus} />
      </section>
    </div>
  );
};

export default Contact;
