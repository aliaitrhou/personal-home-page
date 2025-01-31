"use client";

import React, { useState, FormEvent, useCallback, ChangeEvent } from "react";
import { ImSpinner9 } from "react-icons/im";

const Form = () => {
  const [status, setStatus] = useState({
    isSubmitted: false,
    isSubmitting: false,
    info: {
      isError: false,
      msg: null,
    },
  });

  const [data, setData] = useState({
    senderName: "",
    email: "",
    message: "",
  });

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setStatus((prev) => ({
        ...prev,
        isSubmitted: true,
      }));
      console.log("form submitted!");
      console.log(data);
    },
    [data],
  );

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { value, name } = e.target as HTMLInputElement | HTMLTextAreaElement;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form
      className="flex flex-col gap-3 w-full sm:w-[80%] px-6 sm:px-8 md:px-12"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className="inputs"
        placeholder="Your name"
        type="text"
        value={data.senderName}
        required
        name="senderName"
        onChange={handleChange}
      />
      <input
        className="inputs"
        placeholder="e.g. example@gmail.com"
        type="email"
        value={data.email}
        name="email"
        onChange={handleChange}
        required
      />
      <textarea
        className="inputs min-h-[8em] resize-none"
        placeholder="Reason of contact ?"
        value={data.message}
        name="message"
        onChange={handleChange}
        maxLength={500}
        required
      />
      <button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-NeonLime-500 dark:text-black dark:hover:bg-NeonLime-600 text-center w-28 rounded-md px-6 py-2 mx-auto"
      >
        Submit
        {/* <ImSpinner9 className="animate-spin" /> */}
      </button>
    </form>
  );
};

export default Form;
