import { ToastType } from "~/models/toast-type";

export interface Toast {
  message: string;
  type: ToastType;
  id?: number;
}
