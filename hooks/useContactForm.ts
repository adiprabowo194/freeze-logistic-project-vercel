"use client";

import { useEffect, useRef } from "react";
import { useActionState } from "react";
import toast from "react-hot-toast";

import { sendEmail } from "@/app/actions/sendEmail";

const initialState = {
  success: null,
  message: "",
  timestamp: null,
};

export function useContactForm(p0: () => void) {
  const [state, formAction] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state?.timestamp) return;

    if (state.success) {
      toast.success(state.message || "Message sent!");
      formRef.current?.reset();
    } else {
      toast.error(state.message || "Failed to send message");
    }
  }, [state?.timestamp]); // 🔥 hanya trigger saat timestamp berubah

  return {
    state,
    formAction,
    formRef,
  };
}