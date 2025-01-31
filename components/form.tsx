"use client";

import React, { useState, FormEvent, useCallback, ChangeEvent } from "react";

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
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col ga-3">
        <input
          placeholder="Your name"
          type="text"
          value={data.senderName}
          required
          name="senderName"
          onChange={handleChange}
        />
        <input
          placeholder="e.g. example@gmail.com"
          type="email"
          value={data.email}
          name="email"
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Reason of contact?"
          value={data.message}
          name="message"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
