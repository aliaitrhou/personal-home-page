import Form from "@/components/form";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 mx-auto pt-4">
      <section className="min-h-[70dvh] flex flex-col items-center justify-center space-y-6">
        <h2 className="font-extrabold text-4xl text-zinc-600 dark:text-zinc-500">
          Let&apos;s get in Touch
        </h2>
        <Form />
      </section>
    </div>
  );
};

export default Contact;
