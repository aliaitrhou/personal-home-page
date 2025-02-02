"use client";

import React, {
  useState,
  FormEvent,
  useCallback,
  ChangeEvent,
  useEffect,
} from "react";

import axios from "axios";
import RequiredBox from "./required-warn-box";
import { ImSpinner9 } from "react-icons/im";

interface Props {
  getStatus: (message: string, error: boolean) => void;
}

const Form: React.FC<Props> = ({ getStatus }) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState({
    isSubmitted: false,
    isSubmitting: false,
    isEmailChange: false,
    info: {
      isError: false,
      msg: "",
    },
  });

  const [data, setData] = useState({
    senderName: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value, name } = e.target as
        | HTMLInputElement
        | HTMLTextAreaElement;

      setStatus((prev) => ({
        ...prev,
        isEmailChange: name === "email",
      }));

      setData((prev) => ({
        ...prev,
        [name]: value,
      }));

      setErrors((prev) => ({
        ...prev,
        [name]: "", // Clear error for the current field
      }));
    },
    [],
  );

  const setError = (field: string, message: string) => {
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleServerResponse = (ok: boolean, msg: string) => {
    setData({
      senderName: "",
      email: "",
      message: "",
    });
    if (ok) {
      setStatus((prev) => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
        info: { isError: false, msg: msg },
      }));
    } else {
      setStatus((prev) => ({
        ...prev,
        isSubmitting: false,
        info: { isError: true, msg: msg },
      }));
    }
  };

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrors({});

      if (!data.senderName.trim()) {
        setError("senderName", "Name is required");
      }

      if (!data.email.trim()) {
        setError("email", "Email is required");
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        setError("email", "Invalid email format");
        return;
      }

      if (!data.message.trim()) {
        setError("message", "Reason cannot be empty");
        return;
      }

      setStatus((prev) => ({
        ...prev,
        isSubmitting: true,
        isEmailChange: false,
      }));

      axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_FORM_URL}`,
        data,
      })
        .then((_response) =>
          handleServerResponse(
            true,
            "Oh! I have successfully received your message :)",
          ),
        )
        .catch((e) => handleServerResponse(false, e.response.data.error));
    },
    [data],
  );

  useEffect(() => {
    if (status.info.msg) {
      getStatus(status.info.msg, status.info.isError);
    }
  }, [status.info, getStatus]);

  return (
    <form
      className="flex flex-col gap-3 w-full xs:px-4 sm:px-10 md:px-12"
      noValidate
      onSubmit={(e) => handleSubmit(e)}
    >
      {errors.senderName && <RequiredBox error={errors.senderName} />}
      <input
        className="inputs"
        placeholder="Your name"
        type="text"
        value={data.senderName}
        required
        name="senderName"
        onChange={handleChange}
      />
      {errors.email && <RequiredBox error={errors.email} />}
      <input
        className="inputs"
        placeholder="e.g. example@gmail.com"
        type="email"
        value={data.email}
        name="email"
        onChange={handleChange}
        required
      />
      {status.isEmailChange && (
        <div className="mb-2 text-orange-500 -mt-2 dark:text-NeonLime-500/90 text-sm">
          Please provide your real email so i can contact you back.
        </div>
      )}
      {errors.message && <RequiredBox error={errors.message} />}
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
        className="bg-orange-400/45 text-orange-500 hover:bg-orange-400/40 dark:bg-NeonLime-400/45 dark:text-NeonLime-500 dark:hover:bg-NeonLime-400/40 border-2 border-orange-500 dark:border-NeonLime-600 text-center w-24 sm:w-28 h-9 sm:h-10 text-sm sm:text-md font-bold  rounded-md sm:px-6  mx-auto focus:outline-none"
      >
        {status.isSubmitting ? (
          <ImSpinner9 className="animate-spin mx-auto" />
        ) : status.isSubmitted ? (
          "Submitted"
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default Form;
