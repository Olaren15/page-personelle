import { useState } from "#app";
import { Toast } from "~/models/toast";
import { useToasts } from "~/composables/useToasts";

export const useToaster = () => {
  const toasts = useToasts();
  const counter = useState("counter", () => 0);

  return {
    makeToast: (toast: Toast) => {
      toast.id = counter.value;
      counter.value = counter.value + 1;

      toasts.value = [...toasts.value, toast];

      setTimeout(() => {
        toasts.value = toasts.value.filter(
          (toastIter) => toastIter.id !== toast.id
        );
      }, 4000);
    },
  };
};
