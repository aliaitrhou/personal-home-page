import Form from "@/components/form";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 mx-auto pt-4 border-2 border-violet-500">
      <section className="min-h-[60dvh] border border-orange-600 border-dashed flex flex-col items-center justify-center">
        <h2 className="font-extrabold text-2xl">Let&apos;s get in Touch</h2>
        <Form />
      </section>
    </div>
  );
};

export default Contact;
