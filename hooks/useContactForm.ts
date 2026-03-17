"use client";

import { useEffect, useRef } from "react";
import { useActionState } from "react";
import toast from "react-hot-toast";

import { sendEmail } from "@/app/actions/sendEmail";

const initialState = {
  success: false,
  message: "",
  timestamp: 0,
};

export function useContactForm(onSuccess: () => void) {
  const [state, formAction] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state?.timestamp) return;

    if (state.success) {
      toast.success(state.message || "Message sent!");
      formRef.current?.reset();
      onSuccess(); // ✅ biar reset AsyncSelect juga
    } else {
      toast.error(state.message || "Failed to send message");
    }
  }, [state.timestamp]);

  return {
    state,
    formAction,
    formRef,
  };
}