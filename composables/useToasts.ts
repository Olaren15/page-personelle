import { useState } from "#imports";
import { Toast } from "~/models/toast";

export const useToasts = () => {
  return useState<Toast[]>("toasts", () => []);
};
