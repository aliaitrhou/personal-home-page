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
    <section className="mx-auto flex flex-col items-center justify-center space-y-4 sm:space-y-6 px-2 sm:px-2 md:px-4 xl:px-6 py-2 sm:py-4">
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
