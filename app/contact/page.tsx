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
    <div className="w-full px-2 sm:px-8 md:px-10 mx-auto py-10">
      <section className="mx-auto flex flex-col items-center justify-center space-y-4 sm:space-y-6 w-[300px] xs:w-[400px] sm:w-[500px] md:w-[550px] px-0 xs:px-4 sm:px-10 md:px-12">
        {status.message && (
          <FormAlert
            message={status.message}
            type={status.error ? "error" : "success"}
          />
        )}
        <Form getStatus={getStatus} />
      </section>
    </div>
  );
};

export default Contact;
